class Favorite < ApplicationRecord
  belongs_to :user
  has_many :restaurants, dependent: :destroy
end
