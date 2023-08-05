messages = [
    "Hello, World!",
    "Welcome to our website!",
    "Greetings and salutations!",
    "Hi there!",
    "Hola!",
    "Good morning!",
    "Have a great day!",
    "Greetings from our team!",
    "Sending warm wishes!",
    "Hey, how are you?"
  ]
  
  messages.each do |message|
    Greeting.create(message: message)
  end