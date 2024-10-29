class Web::ArticlesController < Web::ApplicationController
  def index
    @articles = Article.all

    render inertia: "articles/Index", props: {
      articles: @articles.map do |article|
        article.attributes.merge(
          web_article_path: web_article_path(article),
        )
      end,
    }
  end

  def show
    @article = Article.find(params[:id])

    render inertia: "articles/Show", props: {
      article: @article,
    }
  end
end
