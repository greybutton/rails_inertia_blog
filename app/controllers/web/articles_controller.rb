class Web::ArticlesController < Web::ApplicationController
  def index
    @articles = Article.all

    render inertia: "articles/Index", props: {
      articles: @articles.map do |article|
        article.attributes.merge(
          web_article_path: web_article_path(article),
        )
      end,
      new_web_article_path: new_web_article_path,
    }
  end

  def show
    @article = Article.find(params[:id])

    render inertia: "articles/Show", props: {
      article: @article.as_json(include: :comments),
      edit_web_article_path: edit_web_article_path(@article),
      web_article_path: web_article_path,
      web_article_comments_path: web_article_comments_path(@article)
    }
  end

  def new
    @article = Article.new

    render inertia: "articles/New", props: {
      article: @article,
      web_articles_path: web_articles_path
    }
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to web_articles_path
    else
      redirect_to new_web_article_path, inertia: { errors: @article.errors }
    end
  end

  def edit
    @article = Article.find(params[:id])

    render inertia: "articles/Edit", props: {
      article: @article,
      web_article_path: web_article_path
    }
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      redirect_to web_article_path(@article)
    else
      redirect_to edit_web_article_path, inertia: { errors: @article.errors }
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to web_articles_path, status: :see_other
  end

  private

  def article_params
    params.require(:article).permit(:title, :body)
  end
end
