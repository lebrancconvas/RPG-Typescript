class Character
{
	name: string;
	
	constructor(name: string)
	{
		this.name = name;
	}
}

class CombatableCharacter extends Character
{
	name!: string;
	hp: number;
	atk: number;
	def: number;

	constructor(name: string, hp: number, atk: number, def: number)
	{
		super(name);
		this.hp = hp;
		this.atk = atk;
		this.def = def;
	}

	showStatus()
	{
		console.log(`-- ${this.name} --\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}

	attack(target: CombatableCharacter)
	{
		const damage: number = this.atk - (target.def * 0.2);
		target.hp -= damage;
		console.log(`${this.name} attacks ${target.name}\n${target.name} is received ${damage} damages.`);
	}
}

class NonPlayableCharacter extends Character
{

}

class PlayableCharacter extends CombatableCharacter
{

}

class EnemyCharacter extends CombatableCharacter
{

}

class Warrior extends PlayableCharacter
{
	
}

class Mage extends PlayableCharacter
{
	
}

class Archer extends PlayableCharacter
{
	
}

class Paladin extends PlayableCharacter
{
	
}

class Dragoon extends PlayableCharacter
{
	
}

class Theft extends PlayableCharacter
{
	
}

class Villager extends NonPlayableCharacter
{

}

class Merchant extends NonPlayableCharacter
{

}


const lucia = new Warrior("Lucia XII", 200, 27, 20);
const mafia = new EnemyCharacter("Mafia", 120, 30, 10);

lucia.showStatus();
mafia.showStatus();

lucia.attack(mafia);
mafia.attack(lucia);

lucia.showStatus();
mafia.showStatus();

