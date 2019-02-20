=======================================================
=======================================================

/models/concerns/toyable.rb

module Toyable
    extend ActiveSupport::Concern
  
    included do
        has_many :toys, as: :toyable
    end
  
    def receive_toy(name)
        new_toy = Toy.find_or_create_by(name)
        self.toys += new_toy
    end
  end

  =======================================================

  /db/migrate/20190205044051_create_toys.rb

  class CreateToys < ActiveRecord::Migration[5.1]
  def change
    create_table :toys do |t|
      t.string :name, null: false
      t.references :toyable, polymorphic: true, index: true
      t.timestamps
    end
    add_index :toys, :name, unique: true
    add_index :toys, [:name, :toyable_id, :toyable_type], unique: true
  end
end

=======================================================

/models/toy.rb

class Toy < ApplicationRecord
    validates :name, uniqueness: { scope: [:toyable] }
    belongs_to :toyable, polymorphic: true
  end


=======================================================
=======================================================

/db/migrate/20190205044051_create_votes.rb

class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.string :value, null: false
      t.references :voteable, polymorphic: true, index: true
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :votes, [:user_id, :voteable_id, :voteable_type], unique: true 
  end
end



/models/vote.rb

class Vote < ApplicationRecord
    validates :value, presence: true
    validates :value, inclusion: { in: %w(1 -1)}
    validates_uniqueness_of :user_id, scope: %i[voteable_id voteable_type]
    belongs_to :voteable, polymorphic: true
end

=======================================================
=======================================================