# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Shows a class which has been inherited from the ApplicationController.
class BlogPostsController < ApplicationController
  def index

    # ---2) This method is a Get request that will return all the instances of BlogPost.
    @posts = BlogPost.all
  end

  # ---3) The method of show will return by HTML all the specific paramenters by ID.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method will allow a new instance for a new posting to BlogPost, rendering a new form. If it has not been created in the database, it will disappear when BlogPost is closed out.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This method will post a strong parameter, to ensure personal information is secured. If the incorrect information is entered, the page will be redirected back to the main page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit

    # ---6) This will allow for edit by the parameters ID. It will render an edit form but will not save any edits made if not created in the database, will render the edit form.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

    # ---7) This method allows for updates of new changes by strong parameter ID, will not save any edits made if not created in the database, title an content only.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else

      # ---8) This method will delete (destroy). If it fails, then it will redirect back to the page the user wants deleted.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This method restricts anything below that be can be used on this page.
  private
  def blog_post_params

    # ---10) Params will make only the :title and :content of :blog_post available on the page, this will keep the page private.
    params.require(:blog_post).permit(:title, :content)
  end
end


