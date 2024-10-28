FROM ruby:3.3.5-alpine

ARG RAILS_ROOT=/app
ARG PACKAGES="build-base git gcompat tzdata nodejs npm yarn postgresql-dev bash"

RUN apk update && \
    apk add --no-cache $PACKAGES

RUN mkdir $RAILS_ROOT
WORKDIR $RAILS_ROOT

COPY Gemfile Gemfile.lock ./

RUN gem install bundler:2.5.21
RUN bundle install --jobs 5

COPY package.json package-lock.json ./
RUN npm install

ENV PATH="${RAILS_ROOT}/bin:$PATH"

ADD . $RAILS_ROOT

EXPOSE 3000

CMD bash -c "bundle exec puma -C config/puma.rb"
