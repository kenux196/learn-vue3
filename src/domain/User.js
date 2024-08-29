import { Builder } from 'builder-pattern';

class User {
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.age = '';
    this.address = '';
    this.team = null;
  }

  updateName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayName() {
    console.log(`My name is ${this.lastName} ${this.firstName}`);
  }

  assignTeam(team) {
    this.team = team;
  }

  static create(firstName, lastName, age, address) {
    return Builder(User).firstName(firstName).lastName(lastName).age(age).address(address).build();
  }

  static createFromObject(obj) {
    const team = new Team();
    Object.assign(team, obj.team);
    console.log('🚀 ~ User ~ createFromObject ~ team:', team);
    const user = new User();
    Object.assign(user, obj);
    user.assignTeam(team);
    return user;
  }
}

class Team {
  constructor(name) {
    this.name = name;
  }

  displayTeamName() {
    console.log('🚀 ~ Team ~ displayTeamName ~ this.name:', this.name);
  }
}

export { User, Team };
