class Web::ArticlesController < Web::ApplicationController
  def index
    @articles = Article.all

    render inertia: "articles/Index", props: {
      articles: @articles,
    }
  end
end
