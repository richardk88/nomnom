Restaurant.destroy_all
Favorite.destroy_all
User.destroy_all

richard = User.create({email:'test@test.com', password: '123123', password_confirmation: '123123123'})

tacoBell = Restaurant.create({
    name:'Taco Bell', 
    featuredPhoto:'http://cdn3-www.craveonline.com/assets/mandatory/legacy/2016/08/man_file_1113111_6_ranking_taco_bell_menu_items.jpeg', 
    address:'123 ABC drive, Duluth, GA 30096',
    hours: 'OPEN until 9PM',
    phone: '(123)456-7890',
    url: 'https://locations.tacobell.com/ga/duluth/2121-pleasant-hill-road.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=002425&utm_content=website',
    price: '$',
    rating: '8.5',
    menu: 'https://locations.tacobell.com/ga/duluth/2121-pleasant-hill-road.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=002425&utm_content=website'
})

richard.restaurants = [
    tacoBell
]

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
