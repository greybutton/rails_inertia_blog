class Web::ArticleShowSerializer::CommentSerializer < Web::ApplicationSerializer
  attributes :id, :commenter, :body
end
