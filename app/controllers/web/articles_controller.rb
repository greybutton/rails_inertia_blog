class Web::ArticlesController < Web::ApplicationController
  def index
    @articles = Article.all

    render inertia: "articles/Index", props: {
      articles: @articles,
    }
  end

  def show
    @article = Article.find(params[:id])

    render inertia: "articles/Show", props: {
      article: @article.as_json(include: :comments),
    }
  end

  def new
    @article = Article.new

    render inertia: "articles/New", props: {
      article: @article,
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
