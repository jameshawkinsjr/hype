class CreateChatrooms < ActiveRecord::Migration[5.2]
  def change
    drop_table :chatrooms
    create_table :chatrooms do |t|
      t.string :title
      t.string :topic
      t.string :chatroom_type, null: false
      t.integer :admin_id, null: false
      t.timestamps
    end
  end
end
