class Web::ArticleShowSerializer < Web::ApplicationSerializer
  attributes :id, :title, :body

  has_many :comments
end
