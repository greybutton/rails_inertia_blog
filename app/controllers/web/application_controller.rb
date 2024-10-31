class Web::ApplicationController < ApplicationController
  def serialize(resource, options = {})
    if resource.respond_to?(:length)
      ActiveModel::Serializer::CollectionSerializer.new(resource, options)
    else
      options[:serializer].new(resource, options)
    end
  end
end
