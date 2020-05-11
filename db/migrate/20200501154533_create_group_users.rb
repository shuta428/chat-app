class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :message, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps

      t.index :user_id
      t.index :message_id
      t.index [:user_id, :message_id], unique: true
    end
  end
end
