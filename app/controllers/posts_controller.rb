class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    if Post.create(post_params)
      redirect_to posts_path
    else
      render :action => 'new'
    end
  end

  def edit
    @post = Post.find params[:id]
  end

  def update
    @post = Post.find params[:id]
    if @post.update_attributes(post_params)
      redirect_to posts_path
    else
      render :action => :edit
    end
  end

  def destroy
    @post = Post.find params[:id]
    @post.destroy
    redirect_to posts_path
  end

  def show
    @post = Post.find params[:id]
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
