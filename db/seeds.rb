# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(full_name: "James Halpert", email: "J.Halpert@dunder-mifflin.org", alias: 'Jim Halpert', password: 'Jim123456')
user3 = User.create!(full_name: "Pam Beesly", email: "P.Beesly@dunder-mifflin.org", password: 'Pam123456')
user2 = User.create!(full_name: "Michael Scott", email: "M.Scott@dunder-mifflin.org", password: 'Michael123456')
user4 = User.create!(full_name: "Dwight Schrute", email: "D.Schrute@dunder-mifflin.org", password: 'Dwight123456')
user5 = User.create!(full_name: "Andy Bernard", email: "A.Bernard@dunder-mifflin.org", alias: 'Nard Dog', password: 'Andy123456')
user6 = User.create!(full_name: "Toby Flenderson", email: "T.Flenderson@dunder-mifflin.org", password: 'Toby123456')
user7 = User.create!(full_name: "Kevin Malone", email: "K.Malone@dunder-mifflin.org", password: 'Kevin123456')
user8 = User.create!(full_name: "Angela Martin", email: "A.Martin@dunder-mifflin.org", password: 'Angela123456')
user9 = User.create!(full_name: "Erin Hannon", email: "E.Hannon@dunder-mifflin.org", password: 'Erin123456')
user10 = User.create!(full_name: "Jan Levinson", email: "J.Levinson@dunder-mifflin.org", password: 'Jan123456')
user11 = User.create!(full_name: "Stanley Hudson", email: "S.Hudson@dunder-mifflin.org", alias: 'Stanley', password: 'Stanley123456')
user12 = User.create!(full_name: "Creed Bratton", email: "C.Bratton@dunder-mifflin.org", alias: 'Creed', password: 'Creed123456')
user13 = User.create!(full_name: "Holly Flax", email: "H.Flax@dunder-mifflin.org", password: 'Holly123456')
user14 = User.create!(full_name: "Ryan Howard", email: "R.Howard@dunder-mifflin.org", password: 'Ryan123456')
user15 = User.create!(full_name: "Kelly Kapoor", email: "K.Kapoor@dunder-mifflin.org", password: 'Kelly123456')
user16 = User.create!(full_name: "Gabe Lewis", email: "G.Lewis@dunder-mifflin.org", password: 'Gabe123456')
user17 = User.create!(full_name: "Meredith Palmer", email: "M.Palmer@dunder-mifflin.org", alias: 'Meredith', password: 'Meredith123456')
user18 = User.create!(full_name: "Nellie Bertram", email: "N.Bertram@dunder-mifflin.org", password: 'Nellie123456')
user19 = User.create!(full_name: "Darryl Philbin", email: "D.Philbin@dunder-mifflin.org", password: 'Darryl123456')
user20 = User.create!(full_name: "Robert California", email: "R.California@dunder-mifflin.org", password: 'Robert123456')
user21 = User.create!(full_name: "Pete Miller", email: "P.Miller@dunder-mifflin.org", password: 'Pete123456')
user22 = User.create!(full_name: "Phyllis Vance", email: "P.Vance@dunder-mifflin.org", password: 'Phyllis123456')
user24 = User.create!(full_name: "Charles Miner", email: "C.Miner@dunder-mifflin.org", password: 'Charles123456')
user25 = User.create!(full_name: "Oscar Martinez", email: "O.Martinez@dunder-mifflin.org", password: 'Oscar123456')
user26 = User.create!(full_name: "Jo Bennett", email: "J.Bennett@dunder-mifflin.org", alias: 'Jo', password: 'Jo123456')
user27 = User.create!(full_name: "Roy Anderson", email: "R.Anderson@dunder-mifflin.org", password: 'Roy123456')
user28 = User.create!(full_name: "Deangelo Vickers", email: "D.Vickers@dunder-mifflin.org", password: 'Deangelo123456')
user29 = User.create!(full_name: "Clack Green", email: "C.Green@dunder-mifflin.org", password: 'Clack123456')