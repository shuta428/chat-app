class LikesController < ApplicationController
  before_action :authenticate_user

  def create
    @like = Like.new(user_id: @current_user.id, message_id: params[:message_id])
    @like.save
    redirect_to("/messages/#{params[:message_id]}")
  end

  def destroy
    @like = Like.find_by(user_id: @current_user.id, message_id: params[:message_id])
    @like.destroy
    redirect_to("/messages/#{params[:messages_id]}")
  end
  
end