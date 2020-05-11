class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  has_many :likes, dependent: :destroy
  has_many :good_users, through: :likes, source: :user

  validates :content, presence: true, unless: :image?

  mount_uploader :image, ImageUploader

  def user
    return User.find_by(id: self.user_id)
  end
  
end
