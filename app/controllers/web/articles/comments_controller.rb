class Web::Articles::CommentsController < Web::Articles::ApplicationController
  def create
    @comment = resource_article.comments.create(comment_params)
    redirect_to web_article_path(resource_article)
  end

  private

  def comment_params
    params.require(:comment).permit(:commenter, :body)
  end
end
