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
	hp: number;
	atk: number;
	def: number;
	isFainted: boolean = false;

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
		// Damage Calculation. 
		const luckrate: number[] = [0.2, 0.3, 0.5, 0.6, 0.7, 0.8];
		const indexRandom: number = Math.floor(Math.random() * luckrate.length);

		const damage: number = this.atk - (target.def * luckrate[indexRandom]);

		// Action after attack. 
		if(!this.isFainted)
		{
			target.hp -= damage;
			this.checkFaint();
			target.checkFaint();
			console.log(`${this.name} attacks ${target.name}\n${target.name} is received ${damage} damages.`);
		}
		else
		{
			console.log(`${this.name} cannot attack, because ${this.name} is fainted.`);
		}
	}

	checkFaint()
	{
		if(this.hp <= 0)
		{
			this.hp = 0;
			this.isFainted = true;
		}
	}
}

class NonPlayableCharacter extends Character
{
	greetingDialog: string;

	constructor(name: string, greetingDialog: string)
	{
		super(name);
		this.greetingDialog = greetingDialog;
	}

	greet()
	{
		console.log(`[NPC] ${this.name} => ${this.greetingDialog}`);
	}
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

const combatTest = () => 
{
	const lucia = new Warrior("Lucia XII", 200, 27, 20);
	const mafia = new EnemyCharacter("Mafia", 120, 30, 10);
	
	lucia.showStatus();
	mafia.showStatus();
	
	mafia.attack(lucia);
	lucia.attack(mafia);
	
	lucia.showStatus();
	mafia.showStatus();

	mafia.attack(lucia);

	lucia.showStatus();
	mafia.showStatus();
}

const npcTest = () =>
{
	const villagerA = new Villager("Donavan", "Hello, It is a good day. What do you think?"); 
	villagerA.greet();
}

combatTest();
npcTest();



