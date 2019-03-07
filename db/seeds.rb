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


hypebot = User.create!(full_name: "Hypebot", email: "Hypebot@hype-chat.com", password: 'Hypebot123456')
    file = File.open("app/assets/images/profile_photos/hypebot.png")
    hypebot.photo.attach(io: file, filename: "hypebot")
jim = User.create!(full_name: "Jim Halpert", email: "J.Halpert@dunder-mifflin.org", alias: 'Jim Halpert', password: 'Jim123456')
        file = File.open("app/assets/images/profile_photos/jim.png")
        jim.photo.attach(io: file, filename: "jim")
pam = User.create!(full_name: "Pam Beesly", email: "P.Beesly@dunder-mifflin.org", password: 'Pam123456')
        file = File.open("app/assets/images/profile_photos/pam.png")
        pam.photo.attach(io: file, filename: "pam")
michael = User.create!(full_name: "Michael Scott", email: "M.Scott@dunder-mifflin.org", password: 'Michael123456')
        file = File.open("app/assets/images/profile_photos/michael.png")
        michael.photo.attach(io: file, filename: "michael")
dwight = User.create!(full_name: "Dwight Schrute - Assistant to the Regional Manager", email: "D.Schrute@dunder-mifflin.org", password: 'Dwight123456')
        file = File.open("app/assets/images/profile_photos/dwight.png")
        dwight.photo.attach(io: file, filename: "dwight")
andy = User.create!(full_name: "Andy Bernard", email: "A.Bernard@dunder-mifflin.org", alias: 'Nard Dog', password: 'Andy123456')
        file = File.open("app/assets/images/profile_photos/andy.png")
        andy.photo.attach(io: file, filename: "andy")
toby = User.create!(full_name: "Toby Flenderson", email: "T.Flenderson@dunder-mifflin.org", password: 'Toby123456')
        file = File.open("app/assets/images/profile_photos/toby.png")
        toby.photo.attach(io: file, filename: "toby")
kevin = User.create!(full_name: "Kevin Malone", email: "K.Malone@dunder-mifflin.org", password: 'Kevin123456')
        file = File.open("app/assets/images/profile_photos/kevin.png")
        kevin.photo.attach(io: file, filename: "kevin")
angela = User.create!(full_name: "Angela Martin", email: "A.Martin@dunder-mifflin.org", password: 'Angela123456')
        file = File.open("app/assets/images/profile_photos/angela.png")
        angela.photo.attach(io: file, filename: "angela")
oscar = User.create!(full_name: "Oscar Martinez", email: "O.Martinez@dunder-mifflin.org", password: 'Oscar123456')
        file = File.open("app/assets/images/profile_photos/oscar.png")
        oscar.photo.attach(io: file, filename: "oscar")
erin = User.create!(full_name: "Erin Hannon", email: "E.Hannon@dunder-mifflin.org", password: 'Erin123456')
        file = File.open("app/assets/images/profile_photos/erin.png")
        erin.photo.attach(io: file, filename: "erin")
stanley = User.create!(full_name: "Stanley Hudson", email: "S.Hudson@dunder-mifflin.org", alias: 'Stanley', password: 'Stanley123456')
        file = File.open("app/assets/images/profile_photos/stanley.png")
        stanley.photo.attach(io: file, filename: "stanley")
kelly = User.create!(full_name: "Kelly Kapoor", email: "K.Kapoor@dunder-mifflin.org", password: 'Kelly123456')
        file = File.open("app/assets/images/profile_photos/kelly.png")
        kelly.photo.attach(io: file, filename: "kelly")
phyllis = User.create!(full_name: "Phyllis Vance", email: "P.Vance@dunder-mifflin.org", password: 'Phyllis123456')
        file = File.open("app/assets/images/profile_photos/phyllis.png")
        phyllis.photo.attach(io: file, filename: "phyllis")
meredith = User.create!(full_name: "Meredith Palmer", email: "M.Palmer@dunder-mifflin.org", alias: 'Meredith', password: 'Meredith123456')
        file = File.open("app/assets/images/profile_photos/meredith.png")
        meredith.photo.attach(io: file, filename: "meredith")
darryl = User.create!(full_name: "Darryl Philbin", email: "D.Philbin@dunder-mifflin.org", password: 'Darryl123456')
        file = File.open("app/assets/images/profile_photos/darryl.png")
        darryl.photo.attach(io: file, filename: "darryl")
ryan = User.create!(full_name: "Ryan Howard", email: "R.Howard@dunder-mifflin.org", password: 'Ryan123456')
        file = File.open("app/assets/images/profile_photos/ryan.png")
        ryan.photo.attach(io: file, filename: "ryan")
robert = User.create!(full_name: "Robert California", email: "R.California@dunder-mifflin.org", password: 'Robert123456')
        file = File.open("app/assets/images/profile_photos/robert.png")
        robert.photo.attach(io: file, filename: "robert")
creed = User.create!(full_name: "Creed Bratton", email: "C.Bratton@dunder-mifflin.org", alias: 'Creed', password: 'Creed123456')
        file = File.open("app/assets/images/profile_photos/creed.png")
        creed.photo.attach(io: file, filename: "creed")
jan = User.create!(full_name: "Jan Levinson", email: "J.Levinson@dunder-mifflin.org", password: 'Jan123456')
        file = File.open("app/assets/images/profile_photos/jan.png")
        jan.photo.attach(io: file, filename: "jan")
holly = User.create!(full_name: "Holly Flax", email: "H.Flax@dunder-mifflin.org", password: 'Holly123456')
        file = File.open("app/assets/images/profile_photos/holly.png")
        holly.photo.attach(io: file, filename: "holly")
karen = User.create!(full_name: "Karen Filippelli", email: "K.Filippelli@dunder-mifflin.org", password: 'Karen123456')
        file = File.open("app/assets/images/profile_photos/karen.png")
        karen.photo.attach(io: file, filename: "karen")
gabe = User.create!(full_name: "Gabe Lewis", email: "G.Lewis@dunder-mifflin.org", password: 'Gabe123456')
        file = File.open("app/assets/images/profile_photos/gabe.png")
        gabe.photo.attach(io: file, filename: "gabe")
nellie = User.create!(full_name: "Nellie Bertram", email: "N.Bertram@dunder-mifflin.org", password: 'Nellie123456')
        file = File.open("app/assets/images/profile_photos/nellie.png")
        nellie.photo.attach(io: file, filename: "nellie")
pete = User.create!(full_name: "Pete Miller", email: "P.Miller@dunder-mifflin.org", password: 'Pete123456')
        file = File.open("app/assets/images/profile_photos/pete.png")
        pete.photo.attach(io: file, filename: "pete")
charles = User.create!(full_name: "Charles Miner", email: "C.Miner@dunder-mifflin.org", password: 'Charles123456')
        file = File.open("app/assets/images/profile_photos/charles.png")
        charles.photo.attach(io: file, filename: "charles")
jo = User.create!(full_name: "Jo Bennett", email: "J.Bennett@dunder-mifflin.org", alias: 'Jo', password: 'Jo123456')
        file = File.open("app/assets/images/profile_photos/jo.png")
        jo.photo.attach(io: file, filename: "jo")
roy = User.create!(full_name: "Roy Anderson", email: "R.Anderson@dunder-mifflin.org", password: 'Roy123456')
        file = File.open("app/assets/images/profile_photos/roy.png")
        roy.photo.attach(io: file, filename: "roy")
deangelo = User.create!(full_name: "Deangelo Vickers", email: "D.Vickers@dunder-mifflin.org", password: 'Deangelo123456')
        file = File.open("app/assets/images/profile_photos/deangelo.png")
        deangelo.photo.attach(io: file, filename: "deangelo")
clark = User.create!(full_name: "Clark Green", email: "C.Green@dunder-mifflin.org", password: 'Clark123456')
        file = File.open("app/assets/images/profile_photos/clark.png")
        clark.photo.attach(io: file, filename: "clark")
val = User.create!(full_name: "Val Johnson", email: "V.Johnson@dunder-mifflin.org", alias: "Val", password: 'Val123456')
        file = File.open("app/assets/images/profile_photos/robot5.png")
        val.photo.attach(io: file, filename: "robot5")
nate = User.create!(full_name: "Nate Nickerson", email: "N.Nickerson@dunder-mifflin.org", password: 'Nate123456')
        file = File.open("app/assets/images/profile_photos/robot6.png")
        nate.photo.attach(io: file, filename: "robot6")
josh = User.create!(full_name: "Josh Porter", email: "J.Porter@dunder-mifflin.org", password: 'Josh123456')
        file = File.open("app/assets/images/profile_photos/josh.png")
        josh.photo.attach(io: file, filename: "josh")
bob = User.create!(full_name: "Robert Vance", email: "R.Vance@vance-refrigeration.org", alias: 'Bob Vance - Vance Refrigeration', password: 'Bob123456')
        file = File.open("app/assets/images/profile_photos/bob.png")
        bob.photo.attach(io: file, filename: "bob")

#Main office
office = Chatroom.create!(title: "Dunder Mifflin", topic: "A place to chat", chatroom_type:"channel", admin_id: michael.id)
        #Subscriptions
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
        #Messages
        Message.create!(author_id: michael.id,body: "I had no idea when I got in that car and headed to New York I was going to quit.  I got on that ramp and I thought two hours, two hours to go.  Feeling good.  Listen to some tunes.  Should've peed before I left.",chatroom_id: office.id)
        Message.create!(author_id: kelly.id,body: "Michael get to the good part.",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Okay, so.  I get up to the building, I get to the revolving door... broken!  So I have to take the normal door.",chatroom_id: office.id)
        Message.create!(author_id: oscar.id,body: "At least he is in the building.",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "No, No! I was so nervous it was the wrong building! I walked into the wrong building!",chatroom_id: office.id)
        Message.create!(author_id: pam.id,body: "He finally has a story everyone wants to hear... and he knows it.",chatroom_id: office.id)
        Message.create!(author_id: pam.id,body: "Okay focus. Focus.  You're in the right building, you're with the right people; what happened?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "I looked at Wallace and I said 'I quit!' and as I turned to leave I looked back and I said 'You have no idea how high I can fly.'",chatroom_id: office.id)
        Message.create!(author_id: stanley.id,body: "Did you tell him how sick of him you were?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Why would I do that?",chatroom_id: office.id)
        Message.create!(author_id: angela.id,body: "Well, wouldn't it feel good to tell him that he was incompetent?",chatroom_id: office.id)
        Message.create!(author_id: kevin.id,body: "That he's wasted 15 years of your life?",chatroom_id: office.id)
        Message.create!(author_id: meredith.id,body: "Did you spit in his face?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "You guys have thought about this a lot more than I have. I just winged it.",chatroom_id: office.id)
        Message.create!(author_id: oscar.id,body: "I love a good quitting story. It makes me feel like I have control over my own life.  Gives me hope.  Maybe I will have one of own someday.  But I dream... so...",chatroom_id: office.id)
        Message.create!(author_id: jim.id,body: "About a week ago, Michael gave his 2-week notice. And, surprisingly there is a very big difference between Michael trying and Michael not trying.",chatroom_id: office.id)
        Message.create!(author_id: kevin.id,body: "Michael is that scotch?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Scotch with Splenda. Tastes like Splenda, gets you drunk like scotch. [in Oscar's ear] Clinky, clinky-clink.  Come-on... come on, come on.",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "What am I gonna do? I'll tell ya what I'm gonna do. I gonna do a little bit of this, a little bit of that.  I gonna stay up all day.  Gonna sleep it up all night. I'm gonna give it a OHH! HEY! HO!  And I'm going to stop worrying about calories.",chatroom_id: office.id)
        Message.create!(author_id: stanley.id,body: "Maybe you should go into your office, close the door, and make some calls about jobs?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "I have a job.",chatroom_id: office.id)
        Message.create!(author_id: andy.id,body: "For four more days.",chatroom_id: office.id)
        Message.create!(author_id: pam.id,body: "Do you have any leads on a job?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Pam, what you don't understand is that at my level you just don't look in the want-ads for a job.  You are head-hunted.",chatroom_id: office.id)
        Message.create!(author_id: jim.id,body: "You called any headhunters?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Any good headhunter knows I am available.",chatroom_id: office.id)
        Message.create!(author_id: dwight.id,body: "Any really good headhunter would storm your village at sunset with overwhelming force and cut off your head with a ceremonial knife,",chatroom_id: office.id)
        Message.create!(author_id: jim.id,body: "Right, cause that's what we are talking about.",chatroom_id: office.id)
        Message.create!(author_id: charles.id,body: "Uh, I need you to go over this client list and indicate any wrong or false data.",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "You're 'I need you to' is my command.",chatroom_id: office.id)
        Message.create!(author_id: charles.id,body: "Okay.",chatroom_id: office.id)
        Message.create!(author_id: andy.id,body: "Hey Michael...",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Hey.",chatroom_id: office.id)
        Message.create!(author_id: andy.id,body: "Can I talk to you a minute?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "You can talk to me for as long as you want. I have all the time in the world. Oh God! Blech! Phyllis!",chatroom_id: office.id)
        Message.create!(author_id: andy.id,body: "I just wanted to tell you that... Oh What? What's that?",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Oh! Hey. What is this about?",chatroom_id: office.id)
        Message.create!(author_id: andy.id,body: "Um, you know, cause your leaving and so, it's a farewell...",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Oh.",chatroom_id: office.id)
        Message.create!(author_id: andy.id,body: "I hope I get to work with you someday again.",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "Me too, me too. Is this wine?",chatroom_id: office.id)
        Message.create!(author_id: andy.id,body: "Ah... busted. Yes",chatroom_id: office.id)
        Message.create!(author_id: michael.id,body: "I already have wine.",chatroom_id: office.id)

# Accounting
accounting = Chatroom.create!(title: "Accounting", topic: "The back corner $$", chatroom_type:"channel", admin_id: oscar.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: accounting.id )
        ChatroomSubscription.create!(user_id: angela.id, chatroom_id: accounting.id)
        ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: accounting.id)
        #Messages


# Scranton
scranton = Chatroom.create!(title: "Scranton Office", topic: "The #1 office at Dunder Mifflin", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
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
        #Messages
        Message.create!(author_id: creed.id,body: "Hey Michael, I heard you're having money problems.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "No you didn't.",chatroom_id: scranton.id)
        Message.create!(author_id: creed.id,body: "Listen, I've got the answer.  You declare bankruptcy, all your problems go away.",chatroom_id: scranton.id)
        Message.create!(author_id: creed.id,body: "Creed Bratton has never declared bankruptcy.  When Creed Bratton gets in trouble, he transfers his debt to William Charles Schneider.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "How would that help Creed?  In Monopoly when you go bankrupt, you lose.",chatroom_id: scranton.id)
        Message.create!(author_id: creed.id,body: "You don't go by Monopoly man, that game is nuts.  Nobody just picks up 'get out of jail free' cards, those things cost thousands.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "That is a good point.",chatroom_id: scranton.id)
        Message.create!(author_id: creed.id,body: "Bankruptcy, Michael, is nature's do-over.  It's a fresh start, it's a clean slate.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "Like the witness protection program.",chatroom_id: scranton.id)
        Message.create!(author_id: creed.id,body: "Exactly.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Not at all.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "I've always wanted to be in the witness protection program.  Fresh start, no debts, no baggage.  I've already got my name picked out, Lord Rupert Everton.  I'm a shipping merchant who raises fancy dogs.  That's the life.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "I... DECLARE... BANKRUPTCY!",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Hey, I just wanted you to know that you can't just say the word bankruptcy and expect anything to happen.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "I didn't say it, I declared it.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Still, that's not anything.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "This is a lot of credit card debt.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "Yeah, tell me about it.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Mmm.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "You know, Jan has my credit cards, and she's using them as if I'm made of money, she thinks I'm a human ATM machine.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Okay, a hundred and twenty-five dollars, Amazon.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "Oh, that's the Muppet Show, on DVD, classic.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Twelve hundred dollars.  What's a Core Blaster Extreme?",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "That is by far the best way to strengthen your core.  This machine, you sit on a stabilizer ball, you put your feet into the power stir-ups, you reach up and you grab onto the super rod, and you twist, and you twist, and you twist.  It strengthens your entire core.  Your back core, your arm core, the Marine Core actually uses it.  I think that's how they got a core.",chatroom_id: scranton.id)
        Message.create!(author_id: andy.id,body: "I left a little present for Angela.  I think she's going to like it, because I found it outside of Vance Refrigeration all alone, and I told her in the note that the cat came to find her, that they were destined to be together.  I got game.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Okay, the green bar is what you spend every month on stuff you need, like a car and a house.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "Mm-hm.  That is so cool how you have my name at the top.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "The red bar is what you spend on non-essentials, like magazines, entertainment, things like that.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "Right.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "This scary black bar is what you spend on things that no one ever, ever needs, like multiple magic sets, professional bass fishing equipment.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "How do they do this so fast?  Is this power-point?",chatroom_id: scranton.id)
        Message.create!(author_id: pam.id,body: "Man, Angela really had a hold on him. [Dwight playing the recorder in the background]  Angela.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Michael, I'm going to set you and Jan up with a debt consolidator, you meet with this guy.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "No, no, we are going to leave Jan out of this.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "She has to know.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "We will find another way, we'll ask power-point.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Michael, this is a presentation tool.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "You're a presentation tool if you think I'm gonna tell Jan about this.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "I'm done!",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "No you're not! Ok, just... you're not a tool. Look, we'll tell her that it's bad, but it could've been a lot worse but due to some fancy financial foot work I was able to cut it in half.",chatroom_id: scranton.id)
        Message.create!(author_id: oscar.id,body: "Jan is smart.",chatroom_id: scranton.id)
        Message.create!(author_id: michael.id,body: "She poses.",chatroom_id: scranton.id)
        Message.create!(author_id: jim.id,body: "Dwight, how's the hotel business?",chatroom_id: scranton.id)
        Message.create!(author_id: dwight.id,body: "Stupid.",chatroom_id: scranton.id)
        Message.create!(author_id: jim.id,body: "Have you checked Trip Advisor recently?",chatroom_id: scranton.id)
        Message.create!(author_id: dwight.id,body: "No.",chatroom_id: scranton.id)
        Message.create!(author_id: jim.id,body: "Maybe you should.",chatroom_id: scranton.id)
        Message.create!(author_id: dwight.id,body: "Maybe you should.  Whatever.",chatroom_id: scranton.id)
        Message.create!(author_id: pam.id,body: "We wrote a good review.  Under comments, we wrote, the natural aroma of the beets drifts into the bedroom and makes you dream of simpler times.",chatroom_id: scranton.id)
        Message.create!(author_id: jim.id,body: "The dawn goose walk will tug at your heartstrings.",chatroom_id: scranton.id)
        Message.create!(author_id: pam.id,body: "Table making never seemed so possible.",chatroom_id: scranton.id)
        Message.create!(author_id: jim.id,body: "You will never want to leave your room.",chatroom_id: scranton.id)
        Message.create!(author_id: pam.id,body: "The architecture reminds one of a quaint Tuscan beet farm.",chatroom_id: scranton.id)
        Message.create!(author_id: dwight.id,body: "I'm glad you enjoyed your stay.",chatroom_id: scranton.id)


stamford = Chatroom.create!(title: "Stamford Office", topic: "The #2 office at Dunder Mifflin", chatroom_type:"channel", admin_id: josh.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: josh.id, chatroom_id: stamford.id)
        ChatroomSubscription.create!(user_id: karen.id, chatroom_id: stamford.id)
        ChatroomSubscription.create!(user_id: andy.id, chatroom_id: stamford.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: stamford.id)
        #Messages


utica = Chatroom.create!(title: "Utica Office", topic: "The #10 office at Dunder Mifflin", chatroom_type:"channel", admin_id: karen.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: karen.id, chatroom_id: utica.id)
        #Messages
        Message.create!(author_id: karen.id,body: "Anyone still at the office?",chatroom_id: utica.id)
michaels_office = Chatroom.create!(title: "Michael's Office", topic: "The Manager's Den", chatroom_type:"channel", admin_id: michael.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: michaels_office.id)
        ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: michaels_office.id)
        ChatroomSubscription.create!(user_id: andy.id, chatroom_id: michaels_office.id)
        #Messages
        Message.create!(author_id: michael.id,body: "It's Grotti. He's following up.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Already? This, this guy is persistent!",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "[reads email] 'I feel that you will regret missing this great opportunity to be in business.'",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "That's bad.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Yeah.",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "That's bad.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Yeah. What are my options here? Do I just ignore it, or?",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Yeah right! You heard him! He's gonna burn down the warehouse or run one of our trucks off the road.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Okay, I'm calling the police.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "[hangs up, rips cord from phone] That is the stupidest thing you could do right now!",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "He's right. Cops can't do anything until a crime has been reported.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "All right.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Not only that, but if they find out you snitched, you get a dead horses chopped off head in your bed!",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Shh!",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "You know what?",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "That's not gonna happen.",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "That's an exaggeration.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "That's how it works!",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "What am I supposed to do here?",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "When somebody threatens you, you give in right away. Okay you need to buy insurance from this guy and get him off your back",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "I was thinking exactly the same thing.",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "No, criminals are like raccoons. Okay, you give 'em a taste of cat food pretty soon they'll be back for the whole cat.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Dwight...",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "The only way to defeat a bully is to stand up to him. Trust me, I have bullied a lot of people.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "I don't know, I don't know about that.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Wait let's hear him out, this is interesting.",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "Here's what we do. We meet him in a public place. Ask him to lunch or something like that, some place he can't be openly violent.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Okay.",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "Let him know you're not the typical kind of guy that he can shake down. That you're stubborn. That you might even be a little bit dangerous.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "[snaps fingers] I like this plan. I'd like to officially withdraw my plan.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Hold on, hold on! Just-",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "No, no, no. My plan is out! We do this the hard way.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "All right. I will meet with him, but I'm not going alone.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Well you're gonna have to. [overlaps] Dwight: We'll be right beside you.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "What?",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "[Andy dressed as a mechanic, Cornell hat on] What are you wearing? Who's Pat?",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Well if I'm gonna back you up, I need a weapon without drawing suspicion, and I have to justify it somehow so, I'm a mechanic with a tire thing.",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "Do you know how to use it?",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "To change tires, no. But it's metal, I can hit somebody with it.",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Let's go, come on. [whispers] God!",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Should I change?",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "You're wearing loafers!",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Forget it! Forget it!",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "[Andy is playing with the tire iron] Take that thing off the table! Please!",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Well then I can't use it. I'm just gonna hide it.",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "Hey. Bathroom checks out clean. Nothing behind the toilet except for this roach motel.",chatroom_id: michaels_office.id)
        Message.create!(author_id: andy.id,body: "Oh! God! [smacks roaches]",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Oh my God!",chatroom_id: michaels_office.id)
        Message.create!(author_id: dwight.id,body: "You'll never kill it that way. You want to separate the head from the thorax-",chatroom_id: michaels_office.id)
        Message.create!(author_id: michael.id,body: "Guys, guys. Cool it. There he is, there he is.",chatroom_id: michaels_office.id)
        
party_planning = Chatroom.create!(title: "Party Planning Committee", topic: "Only for serious planners", chatroom_type:"channel", admin_id: angela.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: angela.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: meredith.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: kelly.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: karen.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: ryan.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: holly.id, chatroom_id: party_planning.id)
        ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: party_planning.id)
        #Messages
        Message.create!(author_id: pam.id,body: "We're the party planning committee, and we did not get where we are by playing it safe. We got here by being risk takers. And, yeah, Dwight's party is gonna be terrible. Maybe. Maybe it's not. Maybe it's going to be great. And if it's great...I think we all know what that would mean to us.",chatroom_id: party_planning.id)
        Message.create!(author_id: phyllis.id,body: "Let's do it!",chatroom_id: party_planning.id)
        Message.create!(author_id: pam.id,body: "Yes! Phyllis!",chatroom_id: party_planning.id)
        Message.create!(author_id: angela.id,body: "No. I don't want my name attached to this party.",chatroom_id: party_planning.id)
        Message.create!(author_id: pam.id,body: "What does that even mean? Where would your name appear?",chatroom_id: party_planning.id)
        Message.create!(author_id: angela.id,body: "Please just take my name off of everything.",chatroom_id: party_planning.id)
        Message.create!(author_id: oscar.id,body: "Just take her name off of everything.",chatroom_id: party_planning.id)
        Message.create!(author_id: pam.id,body: "[Clears her throat] The party planning committee, minus Angela, has decided that we're all going to do Dwight's Christmas.",chatroom_id: party_planning.id)
        Message.create!(author_id: dwight.id,body: "Yes! Yeah! [High Fives Jim] Yeah! Okay! Yes! It's a Christmas Miracle! [High Fives Pam] Yeah! Whoo-Hoo!",chatroom_id: party_planning.id)
        Message.create!(author_id: pam.id,body: "Dwight, there is one rule that you need to take very seriously.",chatroom_id: party_planning.id)
        Message.create!(author_id: dwight.id,body: "Uh-huh.",chatroom_id: party_planning.id)
        Message.create!(author_id: pam.id,body: "And that is...",chatroom_id: party_planning.id)
        Message.create!(author_id: dwight.id,body: "Uh, Oh.",chatroom_id: party_planning.id)
        Message.create!(author_id: pam.id,body: "That there are no rules.",chatroom_id: party_planning.id)
        Message.create!(author_id: dwight.id,body: "You have never been cooler.",chatroom_id: party_planning.id)


dwights_farm = Chatroom.create!(title: "Schrute Farms", topic: "Beats, Bears, Battlestar Gallactica", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dwights_farm.id)
        ChatroomSubscription.create!(user_id: karen.id, chatroom_id: dwights_farm.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dwights_farm.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dwights_farm.id)
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dwights_farm.id)
        ChatroomSubscription.create!(user_id: ryan.id, chatroom_id: dwights_farm.id)
        ChatroomSubscription.create!(user_id: kelly.id, chatroom_id: dwights_farm.id)
        #Messages
        Message.create!(author_id: dwight.id,body: "Schrute Farms, guten tag. How can I help you? Yes, we have availability on those nights. How many in your party? Oh no, I'm sorry, no king beds. No queen either. Well, we make our own mattresses that don't conform to the traditional sizes. Closest would be twin. Thank you so much for calling. Call back again. Aufedersein!",chatroom_id: dwights_farm.id)
        Message.create!(author_id: jim.id,body: "Hey Dwight.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "None of your business, Jim.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: jim.id,body: "Do you run the bed and breakfest?",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "It is not a B and B.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "Agrotourism is a lot more than a bed and breakfest. It consists of tourists coming to a farm, showing them around, giving them a bed, giving them brekafest.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: jim.id,body: "Does the Department of Health know about this?",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "I'm not telling you anything. [lookings into the camera] Permits are pending. [phone rings] Dwight Schrute, Dunder Mifflin.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: pam.id,body: "Hello, I'm looking for a room.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "Okay, this is a mis-use of company phones.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: pam.id,body: "It says here you cater to the eldery.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "Where did you read that?",chatroom_id: dwights_farm.id)
        Message.create!(author_id: pam.id,body: "Trip Advsior.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "Trip Advisor is the life blood of the Agrotourism industry. A couple of bad reviews there, you might as well close up shop. That's what took down the Stalk Inn. One of the cutest little asparagus farms you'll ever see.",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "How many in your party?",chatroom_id: dwights_farm.id)
        Message.create!(author_id: pam.id,body: "Two?",chatroom_id: dwights_farm.id)
        Message.create!(author_id: dwight.id,body: "We offer tours of the fields, and of the barn. Uh, perhaps you'll be interested in, um, Mose's table making demonstration?",chatroom_id: dwights_farm.id)

corporate = Chatroom.create!(title: "Corporate", topic: "The Higher Ups", chatroom_type:"channel", admin_id: robert.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: robert.id, chatroom_id: corporate.id)
        ChatroomSubscription.create!(user_id: pete.id, chatroom_id: corporate.id)
        ChatroomSubscription.create!(user_id: charles.id, chatroom_id: corporate.id)
        ChatroomSubscription.create!(user_id: jo.id, chatroom_id: corporate.id)
        ChatroomSubscription.create!(user_id: deangelo.id, chatroom_id: corporate.id)
        ChatroomSubscription.create!(user_id: clark.id, chatroom_id: corporate.id)
        #Messages

warehouse = Chatroom.create!(title: "The Warehouse", topic: "", chatroom_type:"channel", admin_id: darryl.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: darryl.id, chatroom_id: warehouse.id)
        ChatroomSubscription.create!(user_id: roy.id, chatroom_id: warehouse.id)
        ChatroomSubscription.create!(user_id: val.id, chatroom_id: warehouse.id)
        ChatroomSubscription.create!(user_id: nate.id, chatroom_id: warehouse.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: warehouse.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: warehouse.id)

        #Messages
vance = Chatroom.create!(title: "Vance Refrigeration", topic: "Your go-to place for refrigeration", chatroom_type:"channel", admin_id: bob.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: bob.id, chatroom_id: vance.id)
        ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: vance.id)
        #Messages
        Message.create!(author_id: ryan.id,body: "Hey.",chatroom_id: vance.id)
        Message.create!(author_id: phyllis.id,body: "Does everybody know my boyfriend, Bob Vance?",chatroom_id: vance.id)
        Message.create!(author_id: kevin.id,body: "Kevin Malone.",chatroom_id: vance.id)
        Message.create!(author_id: bob.id,body: "Bob Vance, Vance Refrigeration.",chatroom_id: vance.id)
        Message.create!(author_id: stanley.id,body: "Stanley Hudson.",chatroom_id: vance.id)
        Message.create!(author_id: bob.id,body: "Bob Vance, Vance Refrigeration.",chatroom_id: vance.id)
        Message.create!(author_id: ryan.id,body: "Ryan Howard.",chatroom_id: vance.id)
        Message.create!(author_id: bob.id,body: "Bob Vance, Vance Refrigeration.",chatroom_id: vance.id)
        Message.create!(author_id: ryan.id,body: "What line of work you in, Bob?",chatroom_id: vance.id)

akron = Chatroom.create!(title: "Akron Office", topic: "Akron Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
albany = Chatroom.create!(title: "Albany Office", topic: "Albany Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
binghamton = Chatroom.create!(title: "Binghamton Office", topic: "Binghamton Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
buffalo = Chatroom.create!(title: "Buffalo Office", topic: "Buffalo Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
camden = Chatroom.create!(title: "Camden Office", topic: "Camden Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
nashua = Chatroom.create!(title: "Nashua Office", topic: "Nashua Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
northeast = Chatroom.create!(title: "Northeast Office", topic: "Northeast Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
pittsfield = Chatroom.create!(title: "Pittsfield Office", topic: "Pittsfield Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
rochester = Chatroom.create!(title: "Rochester Office", topic: "Rochester Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
syracuse = Chatroom.create!(title: "Syracuse Office", topic: "Syracuse Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages
yonkers = Chatroom.create!(title: "Yonkers Office", topic: "Yonkers Regional Dunder Mifflin Office", chatroom_type:"channel", admin_id: dwight.id)
        #Subscriptions
        #Messages



#Jim and Pam        
dm1 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm1.id)
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm1.id)
        #Messages
        Message.create!(author_id: jim.id,body: "Hey.",chatroom_id: dm1.id)
        Message.create!(author_id: pam.id,body: "Hey!",chatroom_id: dm1.id)
        Message.create!(author_id: jim.id,body: "When are we going to get to see some of those famous Beesly dance moves?",chatroom_id: dm1.id)
        Message.create!(author_id: pam.id,body: "Oh... I'm pacing myself.",chatroom_id: dm1.id)
        Message.create!(author_id: jim.id,body: "Come on. Get out there. Give the people what they want.",chatroom_id: dm1.id)
        Message.create!(author_id: pam.id,body: "No. I'm such a dorky dancer.",chatroom_id: dm1.id)
        Message.create!(author_id: jim.id,body: "I know. It's very cute.",chatroom_id: dm1.id)
        Message.create!(author_id: jim.id,body: "Hypothetically, if I thought Pam was interested, then... No, it's totally hypothetical.",chatroom_id: dm1.id)

#Jim and Andy
dm2 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm2.id)
        ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm2.id)
        #Messages

# Michael Andy Jim Dwight
dm3 = Chatroom.create!(title: "", topic: "the boys", chatroom_type:"direct_message", admin_id: michael.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm3.id)
        ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm3.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm3.id)
        ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dm3.id)
        #Messages
        Message.create!(author_id: michael.id,body: "Whassup!",chatroom_id: dm3.id)
        Message.create!(author_id: jim.id,body: "Whassup! I still love that after seven years.",chatroom_id: dm3.id)
        Message.create!(author_id: michael.id,body: "Whassup!",chatroom_id: dm3.id)
        Message.create!(author_id: dwight.id,body: "Whassup!",chatroom_id: dm3.id)
        Message.create!(author_id: michael.id,body: "Whass...up!",chatroom_id: dm3.id)
        Message.create!(author_id: dwight.id,body: "Whassup.",chatroom_id: dm3.id)
        Message.create!(author_id: michael.id,body: "What?",chatroom_id: dm3.id)
        Message.create!(author_id: jim.id,body: "Nothing.",chatroom_id: dm3.id)
        Message.create!(author_id: michael.id,body: "OK. All right. See you later.",chatroom_id: dm3.id)
        Message.create!(author_id: jim.id,body: "All right. Take care.",chatroom_id: dm3.id)
        Message.create!(author_id: michael.id,body: "Back to work.",chatroom_id: dm3.id)
        

# Pam and Erin       
dm4 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: pam.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm4.id)
        ChatroomSubscription.create!(user_id: erin.id, chatroom_id: dm4.id)
        #Messages

# Jim and Dwight   
dm5 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: angela.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm5.id)
        ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dm5.id)
        #Messages
        Message.create!(author_id: jim.id,body: "It's kind of blurry. :puts on glasses: That's better. Question.  What kind of bear is best?",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "That's a ridiculous question.",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "False.  Black bear.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "Well that's debatable.  There are basically two schools of thought",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "Fact.  Bears eat beets.  Bears.  Beets.  Battlestar Galactica.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "Bears do not--- What is going on--- What are you doing?!",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "Last week, I was in a drug store and I saw these glasses. ",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "Uh, four dollars. And it only cost me seven dollars to recreate the rest of the ensemble.",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "And that's a grand total of... eleven dollars.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "You know what?  Imitation is the most sincere form of flattery, so I thank you. ",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "Identity theft is not a joke, Jim! Millions of families suffer every year!",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "... MICHAEL!",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "Oh, that's funny.  MICHAEL!",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "Impossible. Roulette is not a game of skill, it is a game of chance.",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "I can always kind of win at roulette.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "Oh, really? Mmm-hmm.",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "Yeah.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "How would you do that?",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "Mind control.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "[laughs] You can't be serious. Are you serious?",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "Ever since I was a little kid, like, eight or nine, I could sort of control things with my mind.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "I don't believe you. Continue.",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "It was just little thing, you know, like I could make something shake or I could make a marble fall off the counter. You know, just little things.",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "[scoffs] That's ridiculous. You know what? Uh... Why don't you move that coat rack? Excuse me, everyone! Attention in the office, please. Jim is about to prove his telekinetic powers and he needs absolute silence. Go ahead.",chatroom_id: dm5.id)
        Message.create!(author_id: jim.id,body: "Okay, I'll try. [The coat rack wobbles] [Pam holds up an umbrella handle to the camera in another scene]",chatroom_id: dm5.id)
        Message.create!(author_id: dwight.id,body: "Oh, my God.",chatroom_id: dm5.id)

# Ryan and Kelly        
dm6 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: ryan.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: ryan.id, chatroom_id: dm6.id)
        ChatroomSubscription.create!(user_id: kelly.id, chatroom_id: dm6.id)
        #Messages

# Pam and Toby
toby1 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: toby.id)
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: toby1.id)
        ChatroomSubscription.create!(user_id: toby.id, chatroom_id: toby1.id)
        Message.create!(author_id: toby.id,body: "When do you want to do your performance review?",chatroom_id: toby1.id)
        Message.create!(author_id: pam.id,body: "Never, Toby",chatroom_id: toby1.id)

# Jim and Toby
toby2 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: toby.id)
        ChatroomSubscription.create!(user_id: toby.id, chatroom_id: toby2.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: toby2.id)
        Message.create!(author_id: toby.id,body: "Hey Jim - I think you forgot to submit your weekly review",chatroom_id: toby2.id)
        Message.create!(author_id: toby.id,body: "I'll get on that as soon as possible",chatroom_id: toby2.id)

# Michael and Toby
toby3 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: toby.id)
        ChatroomSubscription.create!(user_id: toby.id, chatroom_id: toby3.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: toby3.id)
        Message.create!(author_id: toby.id,body: "You really need to fill out those reports",chatroom_id: toby3.id)
        Message.create!(author_id: michael.id,body: "This is why no one likes you Toby",chatroom_id: toby3.id)

# Jim and Michael     
dm19 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: michael.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm19.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm19.id)
        #Messages
        Message.create!(author_id: michael.id,body: "Hypothetically, if I were to ask you to go camping, and you know what hypothetical means? Not real.",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Got it.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "So if I were to hypothetically ask you to go camping with me, would you go?",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Absolutely, yes.",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "When Michael plays the hypothetical game, I always say yes.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "Really?",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Yeah?",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "Oh, you wanna go today?",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "And I am always busy.",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Oh, can't go today, 'cause I'm donating blood.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "How often can you actually donate blood?",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Is there a limit?",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "Your body only has a certain amount.",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Well, is that it? Or?",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "Yeah, just this whole Toby, camping thing, uh, seems a little lame.",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "How so?",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "A bunch of guys, in a tent? Making s'mores? [makes a noise and gestures with his hands]",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "What's that?",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "Hello, I'm Broken Mountain. You know, here's the thing. That's not how you go camping. I think you go camping by yourself---",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Right.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "In the wilderness. It's not with a group of guys frolicking around in tents. It's one guy, or two guys, if your plans change.",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "Not gonna change.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "I wanna do it myself. You know, I want to go and, and find out something about myself, I wanna get outta here. All the cliques, and the office politics. Fluorescent lights. Asbestos.",chatroom_id: dm19.id)
        Message.create!(author_id: jim.id,body: "I thought we had that looked at.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "I'm sick of it Jim. I'm sick of this place.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "When Jan and I had satellite, we used to watch a reality show called 'Survivorman.' And, it was interesting because it was about a guy who would go out in the middle of no where and just try not to die, try not to get eaten by an animal, or be overexposed.",chatroom_id: dm19.id)
        Message.create!(author_id: michael.id,body: "OK, I will only need two things. Roll of duct tape and a knife.",chatroom_id: dm19.id)

#        
dm7 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm7.id)
        ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: dm7.id)
        #Messages
        Message.create!(author_id: kevin.id,body: "Why waste time say lot word when few word do trick.",chatroom_id: dm7.id)
        Message.create!(author_id: jim.id,body: "Me think that smart",chatroom_id: dm7.id)

#        
dm8 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: michael.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm8.id)
        ChatroomSubscription.create!(user_id: dwight.id, chatroom_id: dm8.id)
        #Messages
        Message.create!(author_id: michael.id,body: "Uh. Dwight.",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "Ah... agh... dgh... Ahh! No, no! Four years of malfeasance unreported. This cannot stand.",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Okay! Calm down.",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "No! You calm down! Who's side is Toby on? Who's side are you on?",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Hey, hey!",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "Him or me?",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Stop.",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "Him or me? I cannot work with Jim anymore.",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Okay...",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "Either he goes, or I go.",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Dwight...",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "You choose!",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Stop...",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "One of us is out of here by the end of today! [runs out]",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Oh... kay...",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "I am not bluffing!",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Okay.",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "Okay?",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Yes.",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "Do the right thing here, Michael. Okay, I have served you loyally for years.",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Mm-hmm.",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "I deserve this. You know I do!",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "You know your I.D. says you're a security threat?",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "You have till five.",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "There's a sales manager position open in Stamford. Maybe I'll tell Jim. Want me to call Jan and tell her he's interested?",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "I could put in a good word for you, 'cause I'll still be working here. Transfer! Transfer! Everybody! Transfer! Transfer! Transfer! Transfer!",chatroom_id: dm8.id)
        Message.create!(author_id: dwight.id,body: "Okay... meet me in the conference room. Nobody leaves until we work this out. Cage match!",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Cage matches? Yeah, they work. How could they not work? If they didn't work, everybody would still be in the cage.",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "Okay, so Dwight, in your own words - 'Someone replaced all my pens and pencils with crayons. I suspect Jim Halpert.'",chatroom_id: dm8.id)
        Message.create!(author_id: michael.id,body: "and then you said 'Everyone has called me 'Dwayne' all day. I think Jim Halpert paid them to.'",chatroom_id: dm8.id)


#        
dm9 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: erin.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: angela.id, chatroom_id: dm9.id)
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm9.id)

        #Messages

#        
dm10 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: holly.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: holly.id, chatroom_id: dm10.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm10.id)
        #Messages
        Message.create!(author_id: michael.id,body: "Well, well.  Holly... lujah!  It's a miracle, you're at your desk.",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "It's Mike-raculous.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Hoo-ooh!  Reaching!  You'll get there.  Anyway, I was giving it some thought, and there's no reason that two attractive, good looking, intelligent, funny, attractive people can't, you know, just... sit down and work this whole Meredith thing out.",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "Sounds good.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Good.  Would you care to bang it out over lunch?",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "Oh I already bought this...",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Oh no, no, no.  Your food is no good here, my lady.  [sweeps her food into the trash can, misses]  Sorry!  You know what?  Let's go out!  Dunder Mifflin's treat.  Um, actually you're not a client... so... we'll just split it?  Ethical.",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "So, I've gone over corporate policy.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "What do you think?  What do you think of this place?",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "Oh, it's very nice.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Istn't it?  Yeah, it's kind of... business/romantic.  So you're from Des Moines?",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "Mmm.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Wow, that sounds so... warm.",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "In Summer.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Here too.  You know what my favorite season is?",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "Maybe we should talk about Meredith first.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Yeah, get the boring stuff out of the way.  Autumn was what I was going to say.  When the leaves change.  It's just, I... I think it is the most contemplative of seasons.",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "Ok, so I have gone over this and I have thought about it and I just don't think there is any way I can write a report that doesn't end with her being terminated.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Wow, terminator, terminator.",chatroom_id: dm10.id)
        Message.create!(author_id: holly.id,body: "I'm from da future.",chatroom_id: dm10.id)
        Message.create!(author_id: michael.id,body: "Yeah.",chatroom_id: dm10.id)

#        
dm11 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jan.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jan.id, chatroom_id: dm11.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm11.id)
        #Messages
        Message.create!(author_id: michael.id,body: "I try not to think of it as lagging behind. It's more of a David-and-Goliath thing.",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "Yeah, but... Well, the fact of the matter is that your branch is currently number four of the five branches that I oversee.",chatroom_id: dm11.id)
        Message.create!(author_id: michael.id,body: "Top 80 percent!",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "Michael?",chatroom_id: dm11.id)
        Message.create!(author_id: michael.id,body: "Yeah?",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "You know that I'm very serious here.",chatroom_id: dm11.id)
        Message.create!(author_id: michael.id,body: "Jan, listen, I promise that I will kick it up a notch. Bam!",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "What?",chatroom_id: dm11.id)
        Message.create!(author_id: michael.id,body: "Emeril. Oh, actually, while I have you, not that I have you or have ever had you, but we're having our Casino Night tonight and I think everyone would love to see their fearless leader here.",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "I thought that you were their fearless leader.",chatroom_id: dm11.id)
        Message.create!(author_id: michael.id,body: "I am, but you are the Eva Peron to my Cesar Chavez.",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "[laughs] I think you can handle it.",chatroom_id: dm11.id)
        Message.create!(author_id: michael.id,body: "Oh, come on. Come on.",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "I think so, Michael...",chatroom_id: dm11.id)
        Message.create!(author_id: michael.id,body: "You know, it'd be fun. I can hear it in your voice. You need a break.",chatroom_id: dm11.id)
        Message.create!(author_id: jan.id,body: "Goodbye, Michael.",chatroom_id: dm11.id)

#        
dm13 = Chatroom.create!(title: "", topic: "the cool crew", chatroom_type:"direct_message", admin_id: phyllis.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: dm13.id)
        ChatroomSubscription.create!(user_id: stanley.id, chatroom_id: dm13.id)
        ChatroomSubscription.create!(user_id: meredith.id, chatroom_id: dm13.id)
        ChatroomSubscription.create!(user_id: creed.id, chatroom_id: dm13.id)
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm13.id)

        #Messages

#        
dm14 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: creed.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: creed.id, chatroom_id: dm14.id)
        #Messages

#        
dm15 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: kevin.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: kevin.id, chatroom_id: dm15.id)
        ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: dm15.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm15.id)
        #Messages

#        
dm16 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: oscar.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: oscar.id, chatroom_id: dm16.id)
        ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm16.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm16.id)
        #Messages

#        
dm17 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: andy.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm17.id)
        ChatroomSubscription.create!(user_id: erin.id, chatroom_id: dm17.id)
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm17.id)
        #Messages
        Message.create!(author_id: andy.id,body: "Erin, uh, I need you to send this fax immediately.  It's really important, so I'm going to stand here and wait for the confirmation.",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "Okay, good.",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "The fax says 'Erin, will you have dinner with me?' from Andy, and the number is our office fax number.",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "It's busy.  Why don't I keep trying, and then I'll give you the confirmation in a bit?",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "Sorry, that's unacceptable.  I need you to send it immediately, or you're fired.",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "[tearing up]  You can't talk to me like that.  I didn't do anything wrong.  I've been having a tough day today.",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "Oh, God, no.  I'm...  Just read the fax.",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "You read the fax.",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "I'm...  I'm asking you out.",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "Oh, my God.  That's amazing.  Let me just fax this, and I'll check my planner.",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "So, it's a date.",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "Yes.  Do you have a day in mind?",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "Yeah, what day?  What day?",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "Everyday is fine.  Or...",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "Well, that, what's that one?",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "Thursday?",chatroom_id: dm17.id)
        Message.create!(author_id: andy.id,body: "Okay.  Let's do it.",chatroom_id: dm17.id)
        Message.create!(author_id: erin.id,body: "Okay.",chatroom_id: dm17.id)

#        
dm18 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm18.id)
        ChatroomSubscription.create!(user_id: stanley.id, chatroom_id: dm18.id)
        #Messages
        Message.create!(author_id: stanley.id,body: "Hey Jim - how was your weekend?",chatroom_id: dm18.id)
        Message.create!(author_id: jim.id,body: "Great! How about yours?",chatroom_id: dm18.id)
        Message.create!(author_id: stanley.id,body: "Better than being here",chatroom_id: dm18.id)


#        
dm20 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: jim.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: jim.id, chatroom_id: dm20.id)
        ChatroomSubscription.create!(user_id: darryl.id, chatroom_id: dm20.id)
        #Messages
        Message.create!(author_id: jim.id,body: "Great! How about yours?",chatroom_id: dm18.id)
        Message.create!(author_id: darryl.id,body: "Hey Jim - how was your weekend?",chatroom_id: dm18.id)

#        
dm21 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: pam.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: dm21.id)
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm21.id)
        #Messages
        Message.create!(author_id: phyllis.id,body: "Hey honey - just wanted to say you need to fix your makeup?",chatroom_id: dm21.id)

#        
dm22 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: michael.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm22.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm22.id)
        #Messages

#        
dm23 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: michael.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: meredith.id, chatroom_id: dm23.id)
        ChatroomSubscription.create!(user_id: michael.id, chatroom_id: dm23.id)
        #Messages

#Pam and Roy
dm24 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: roy.id)
        #Subscriptions
        ChatroomSubscription.create!(user_id: pam.id, chatroom_id: dm24.id)
        ChatroomSubscription.create!(user_id: roy.id, chatroom_id: dm24.id)
        #Messages
        Message.create!(author_id: pam.id,body: "I want us to make it. I want a fresh start.",chatroom_id: dm24.id)
        Message.create!(author_id: roy.id,body: "That's awesome. That's what I want.",chatroom_id: dm24.id)
        Message.create!(author_id: pam.id,body: "Oh ok, but in order for us to make it, there can't be any secrets between us.",chatroom_id: dm24.id)
        Message.create!(author_id: roy.id,body: "I didn't do anything. Ask anyone, I totally could have and I didn't at all.",chatroom_id: dm24.id)
        Message.create!(author_id: pam.id,body: "Just listen. Remember that casino night about a month before we were supposed to get married? I kissed Jim.",chatroom_id: dm24.id)
        Message.create!(author_id: roy.id,body: "What?",chatroom_id: dm24.id)
        Message.create!(author_id: pam.id,body: "He told me how he felt and I guess I had feelings too, and we kissed.",chatroom_id: dm24.id)
        Message.create!(author_id: roy.id,body: "Jim came on to you?",chatroom_id: dm24.id)
        Message.create!(author_id: pam.id,body: "Just listen.",chatroom_id: dm24.id)
        Message.create!(author_id: roy.id,body: "No, I am listening! That's the problem I am listening!",chatroom_id: dm24.id)
        Message.create!(author_id: pam.id,body: "Don't yell!",chatroom_id: dm24.id)
        Message.create!(author_id: roy.id,body: "Don't yell?!",chatroom_id: dm24.id)
        Message.create!(author_id: pam.id,body: "This is over.",chatroom_id: dm24.id)
        Message.create!(author_id: roy.id,body: "Yeah, you're right. This is so over. You kidding me, Pam!? Come on! God!",chatroom_id: dm24.id)




        
        
        



























