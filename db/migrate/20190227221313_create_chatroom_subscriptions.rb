class CreateChatroomSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :chatroom_subscriptions do |t|
      t.integer :chatroom_id, null: false
      t.integer :user_id, null: false
      t.integer :last_read_message

      t.timestamps
    end
    add_index :chatroom_subscriptions, :last_read_message
    add_index :chatroom_subscriptions, [:chatroom_id, :user_id], unique: true
  end
end
