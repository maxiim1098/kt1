class User {
    private static count = 0
  
    constructor(private name: string, private login: string, private password: string, private grade: number) {
      User.count++
    }
    getName(): string {
      return this.name
    }
    setName(name: string): void {
      this.name = name
    }
    getLogin(): string {
      return this.login
    }
    setPassword(password: string): void {
      this.password = password
    }
    getPassword(): string {
      return "********"
    }
    getGrade(): number {
      return 1
    }
    showInfo(): void {
      console.log(`Имя: ${this.name}, Логин: ${this.login}`)
    }
  
    eq(user: User): boolean {
      return this.grade === user.grade
    }
  
    lt(user: User): boolean {
      return this.grade < user.grade
    }
  
    gt(user: User): boolean {
      return this.grade > user.grade
    }
  
    static getCount(): number {
      return User.count
    }
  }
  
  class SuperUser extends User {
    private static count2 = 0
  
    constructor(name: string, login: string, password: string, private role: string) {
      super(name, login, password, 0)
      SuperUser.count2++
    }
  
    getRole(): string {
      return this.role
    }
  
    setRole(role: string): void {
      this.role = role
    }
  
    showInfo(): void {
      console.log(`Имя: ${this.name}, Логин: ${this.login}, Роль: ${this.role}`)
    }
  
    static getCount(): number {
      return SuperUser.count2
    }
  }
  
  const user1 = new User("John", "john", "password", 10)
  const user2 = new User("Jane", "jane", "password", 15)
  const superUser1 = new SuperUser("Admin", "admin", "password", "Администратор")
  
  console.log(user1.getName())
  console.log(user1.getLogin())
  console.log(user1.getPassword())
  console.log(user1.getGrade())
  
  user1.setName("John Doe");
  user1.setPassword("new_password")
  
  console.log(user1.getName())
  console.log(user1.getLogin())
  console.log(user1.getPassword())
  
  console.log(user1.eq(user2))
  console.log(user1.lt(user2))
  console.log(user1.gt(user2))
  
  console.log(User.getCount())
  console.log(SuperUser.getCount())
  
  superUser1.showInfo()