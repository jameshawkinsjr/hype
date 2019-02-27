# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Chatroom.destroy_all
Message.destroy_all
ChatroomSubscription.destroy_all

jim = User.create!(full_name: "James Halpert", email: "J.Halpert@dunder-mifflin.org", alias: 'Jim Halpert', password: 'Jim123456')
pam = User.create!(full_name: "Pam Beesly", email: "P.Beesly@dunder-mifflin.org", password: 'Pam123456')
michael = User.create!(full_name: "Michael Scott", email: "M.Scott@dunder-mifflin.org", password: 'Michael123456')
dwight = User.create!(full_name: "Dwight Schrute", email: "D.Schrute@dunder-mifflin.org", password: 'Dwight123456')
andy = User.create!(full_name: "Andy Bernard", email: "A.Bernard@dunder-mifflin.org", alias: 'Nard Dog', password: 'Andy123456')
toby = User.create!(full_name: "Toby Flenderson", email: "T.Flenderson@dunder-mifflin.org", password: 'Toby123456')
kevin = User.create!(full_name: "Kevin Malone", email: "K.Malone@dunder-mifflin.org", password: 'Kevin123456')
angela = User.create!(full_name: "Angela Martin", email: "A.Martin@dunder-mifflin.org", password: 'Angela123456')
oscar = User.create!(full_name: "Oscar Martinez", email: "O.Martinez@dunder-mifflin.org", password: 'Oscar123456')
erin = User.create!(full_name: "Erin Hannon", email: "E.Hannon@dunder-mifflin.org", password: 'Erin123456')
jan = User.create!(full_name: "Jan Levinson", email: "J.Levinson@dunder-mifflin.org", password: 'Jan123456')
stanley = User.create!(full_name: "Stanley Hudson", email: "S.Hudson@dunder-mifflin.org", alias: 'Stanley', password: 'Stanley123456')
creed = User.create!(full_name: "Creed Bratton", email: "C.Bratton@dunder-mifflin.org", alias: 'Creed', password: 'Creed123456')
holly = User.create!(full_name: "Holly Flax", email: "H.Flax@dunder-mifflin.org", password: 'Holly123456')
ryan = User.create!(full_name: "Ryan Howard", email: "R.Howard@dunder-mifflin.org", password: 'Ryan123456')
kelly = User.create!(full_name: "Kelly Kapoor", email: "K.Kapoor@dunder-mifflin.org", password: 'Kelly123456')
karen = User.create!(full_name: "Karen Filippelli", email: "K.Filippelli@dunder-mifflin.org", password: 'Karen123456')
gabe = User.create!(full_name: "Gabe Lewis", email: "G.Lewis@dunder-mifflin.org", password: 'Gabe123456')
meredith = User.create!(full_name: "Meredith Palmer", email: "M.Palmer@dunder-mifflin.org", alias: 'Meredith', password: 'Meredith123456')
nellie = User.create!(full_name: "Nellie Bertram", email: "N.Bertram@dunder-mifflin.org", password: 'Nellie123456')
darryl = User.create!(full_name: "Darryl Philbin", email: "D.Philbin@dunder-mifflin.org", password: 'Darryl123456')
robert = User.create!(full_name: "Robert California", email: "R.California@dunder-mifflin.org", password: 'Robert123456')
pete = User.create!(full_name: "Pete Miller", email: "P.Miller@dunder-mifflin.org", password: 'Pete123456')
phyllis = User.create!(full_name: "Phyllis Vance", email: "P.Vance@dunder-mifflin.org", password: 'Phyllis123456')
charles = User.create!(full_name: "Charles Miner", email: "C.Miner@dunder-mifflin.org", password: 'Charles123456')
jo = User.create!(full_name: "Jo Bennett", email: "J.Bennett@dunder-mifflin.org", alias: 'Jo', password: 'Jo123456')
roy = User.create!(full_name: "Roy Anderson", email: "R.Anderson@dunder-mifflin.org", password: 'Roy123456')
deangelo = User.create!(full_name: "Deangelo Vickers", email: "D.Vickers@dunder-mifflin.org", password: 'Deangelo123456')
clark = User.create!(full_name: "Clark Green", email: "C.Green@dunder-mifflin.org", password: 'Clack123456')
bob = User.create!(full_name: "Robert Vance", email: "R.Vance@vance-refrigeration.org", alias: 'Bob Vance - Vance Refrigeration', password: 'Bob123456')

office = Chatroom.create!(title: "Dunder Mifflin", topic: "A place to chat", chatroom_type:"channel", admin_id: michael.id)
accounting = Chatroom.create!(title: "Accounting", topic: "The back corner $$", chatroom_type:"channel", admin_id: oscar.id)
scranton = Chatroom.create!(title: "Scranton Office", topic: "The #1 office at Dunder Mifflin", chatroom_type:"channel", admin_id: dwight.id)
michaels_office = Chatroom.create!(title: "Michael's Office", topic: "The Manager's Den", chatroom_type:"channel", admin_id: michael.id)
party_planning = Chatroom.create!(title: "Party Planning Committee", topic: "Only for serious planners", chatroom_type:"channel", admin_id: angela.id)
dwights_farm = Chatroom.create!(title: "Dwight's Farm", topic: "Beats, Bears, Battlestar Gallactica", chatroom_type:"channel", admin_id: dwight.id)
corporate = Chatroom.create!(title: "Corporate", topic: "The Higher Ups", chatroom_type:"channel", admin_id: robert.id)
dm1 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
dm2 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
dm3 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
dm4 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: pam.id)
dm5 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: angela.id)
dm6 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: ryan.id)
dm7 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
dm8 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: michael.id)
dm9 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: erin.id)
dm10 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: holly.id)
dm11 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jan.id)
dm12 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: toby.id)
dm13 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: phyllis.id)
dm14 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: creed.id)
dm15 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: kevin.id)
dm16 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: oscar.id)
dm17 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: andy.id)
dm18 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)

ChatroomSubscription.create!(user_id: jim.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: pam.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: michael.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: andy.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: toby.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: angela.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: erin.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: jan.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: stanley.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: creed.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: holly.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: ryan.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: kelly.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: karen.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: gabe.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: meredith.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: nellie.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: darryl.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: robert.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: pete.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: charles.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: jo.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: roy.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: deangelo.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: clark.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: bob.id, chatroom_id: office.id)
ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: accounting.id )
ChatroomSubscription.create!(user_id: angela.id, chatroom_id: accounting.id)
ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: accounting.id)
ChatroomSubscription.create!(user_id: jim.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: pam.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: michael.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: andy.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: toby.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: angela.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: erin.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: jan.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: stanley.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: creed.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: holly.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: ryan.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: kelly.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: karen.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: gabe.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: meredith.id, chatroom_id: scranton.id)
ChatroomSubscription.create!(user_id: michael.id, chatroom_id: michaels_office.id)
ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: michaels_office.id)
ChatroomSubscription.create!(user_id: andy.id, chatroom_id: michaels_office.id)
ChatroomSubscription.create!(user_id: angela.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: pam.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: meredith.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: kelly.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: karen.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: ryan.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: holly.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: party_planning.id)
ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dwights_farm.id)
ChatroomSubscription.create!(user_id: karen.id, chatroom_id: dwights_farm.id)
ChatroomSubscription.create!(user_id: robert.id, chatroom_id: corporate.id)
ChatroomSubscription.create!(user_id: pete.id, chatroom_id: corporate.id)
ChatroomSubscription.create!(user_id: charles.id, chatroom_id: corporate.id)
ChatroomSubscription.create!(user_id: jo.id, chatroom_id: corporate.id)
ChatroomSubscription.create!(user_id: deangelo.id, chatroom_id: corporate.id)
ChatroomSubscription.create!(user_id: clark.id, chatroom_id: corporate.id)
ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm1.id)
ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm1.id)
ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm2.id)
ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm2.id)
ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm3.id)
ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm3.id)
ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm3.id)
ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dm3.id)
ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm4.id)
ChatroomSubscription.create!(user_id: erin.id, chatroom_id: dm4.id)
ChatroomSubscription.create!(user_id: angela.id, chatroom_id: dm5.id)
ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dm5.id)
ChatroomSubscription.create!(user_id: ryan.id, chatroom_id: dm6.id)
ChatroomSubscription.create!(user_id: kelly.id, chatroom_id: dm6.id)
ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm7.id)
ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: dm7.id)
ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm8.id)
ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dm8.id)
ChatroomSubscription.create!(user_id: erin.id, chatroom_id: dm9.id)
ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm9.id)
ChatroomSubscription.create!(user_id: holly.id, chatroom_id: dm10.id)
ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm10.id)
ChatroomSubscription.create!(user_id: jan.id, chatroom_id: dm11.id)
ChatroomSubscription.create!(user_id: toby.id, chatroom_id: dm12.id)
ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm12.id)
ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: dm13.id)
ChatroomSubscription.create!(user_id: stanley.id, chatroom_id: dm13.id)
ChatroomSubscription.create!(user_id: creed.id, chatroom_id: dm14.id)
ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: dm15.id)
ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: dm15.id)
ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: dm16.id)
ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm16.id)
ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm17.id)
ChatroomSubscription.create!(user_id: erin.id, chatroom_id: dm17.id)
ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm18.id)
ChatroomSubscription.create!(user_id: stanley.id, chatroom_id: dm18.id)
