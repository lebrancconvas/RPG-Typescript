class Character 
{
	name: string;

	constructor(name: string) 
	{
		this.name = name;
	}
}

class PlayableCharacter extends Character 
{
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

	attack()
	{
		
	}
}

class NonPlayableCharacter extends Character 
{

}

class EnemyCharacter extends Character 
{

}

class Warrior extends PlayableCharacter 
{
	constructor(name: string, hp: number, atk: number, def: number) 
	{
		super(name, hp, atk, def);
	}

	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Warrior\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}
}

class Mage extends PlayableCharacter 
{
	constructor(name: string, hp: number, atk: number, def: number) 
	{
		super(name, hp, atk, def);
	}

	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Mage\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}
}

class Paladin extends PlayableCharacter 
{
	constructor(name: string, hp: number, atk: number, def: number) 
	{
		super(name, hp, atk, def);
	}

	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Paladin\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}
}

class BossEnemy extends EnemyCharacter 
{

}

class Villager extends NonPlayableCharacter 
{

}

class Merchant extends NonPlayableCharacter 
{

}

const vivi = new Mage("Vivi", 100, 12, 14);
const cecil = new Paladin("Cecil", 120, 20, 16);

vivi.showStatus();
cecil.showStatus();