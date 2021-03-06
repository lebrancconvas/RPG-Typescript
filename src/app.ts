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

	summaryStatus(target: CombatableCharacter)
	{
		console.log("SUMMARY");
		this.showStatus();
		target.showStatus();
	}

	attack(target: CombatableCharacter)
	{
		// Damage Calculation. 
		const luckrate: number[] = [0.2, 0.3, 0.5, 0.6, 0.7, 0.8];
		const indexRandom: number = Math.floor(Math.random() * luckrate.length);

		const damage: number = Math.floor(this.atk * (100 / (100 + (this.def * luckrate[indexRandom]))));

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

		this.summaryStatus(target);
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
	useItem(target: CombatableCharacter)
	{

	}
}

class EnemyCharacter extends CombatableCharacter
{
	heldItems: string[];

	constructor(name: string, hp: number, atk: number, def: number, heldItems: string[])
	{
		super(name, hp, atk, def);
		this.heldItems = heldItems;
	}
}

class Warrior extends PlayableCharacter
{
	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Warrior\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}
}

class Mage extends PlayableCharacter
{
	mp: number;

	constructor(name: string, hp: number, mp: number, atk: number, def: number)
	{
		super(name, hp, atk, def);
		this.mp = mp;
	}

	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Mage\nHP: ${this.hp}\nMP: ${this.mp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}

	useSkill(skill: Skill, target: CombatableCharacter)
	{
		this.mp -= skill.mana;
		target.hp -= skill.effect;
		console.log(`${this.name} uses ${skill.name} to ${target.name}\n${target.name} is received ${skill.effect} damages.`);
		this.summaryStatus(target);
	}	
}

class Paladin extends PlayableCharacter
{
	mp: number;
	constructor(name: string, hp: number, mp: number, atk: number, def: number)
	{
		super(name, hp, atk, def);
		this.mp = mp;
	}

	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Paladin\nHP: ${this.hp}\nMP: ${this.mp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}

	useSkill(skill: Skill, target: CombatableCharacter)
	{
		this.mp -= skill.mana;
		target.hp += skill.effect;
		console.log(`${this.name} uses ${skill.name} to ${target.name}\n${target.name} is received ${skill.effect} damages.`);
		this.summaryStatus(target); 
	}	
}

class Dragoon extends PlayableCharacter
{
	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Dragoon\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}

	jump()
	{

	}
}

class Theft extends PlayableCharacter
{
	showStatus()
	{
		console.log(`-- ${this.name} --\nClass: Theft\nHP: ${this.hp}\nATK: ${this.atk}\nDEF: ${this.def}`);
	}

	steal(target: EnemyCharacter)
	{

	}
}

class Villager extends NonPlayableCharacter
{

}

class Merchant extends NonPlayableCharacter
{
	trade(MerchantItem: Item, PlayerItem: Item)
	{

	}
}

class BossEnemy extends EnemyCharacter
{

}

class CombatStuff
{
	name: string;
	description: string;
	effect: number;
	support: boolean;

	constructor(name: string, description: string, effect: number, support: boolean)
	{
		this.name = name;
		this.description = description;
		this.effect = effect;
		this.support = support;
	}
}

class Skill extends CombatStuff
{
	mana: number;

	constructor(name: string, description: string, mana: number, effect: number, support: boolean)
	{
		super(name, description, effect, support);
		this.mana = mana;
	}
}

class Item extends CombatStuff
{
	amount: number;

	constructor(name: string, description: string, amount: number, effect: number, support: boolean)
	{
		super(name, description, effect, support);
		this.amount = amount;
	}
}

class Party 
{
	name: string;
	member: PlayableCharacter[];

	constructor(name: string, member: PlayableCharacter[])
	{
		this.name = name;
		this.member = member;
	}

	showMember()
	{
		console.log(`-- PARTY: ${this.name} --`)
		this.member.map(member => {
			console.log(`* ${member.name}`);
		})
	}

	addMember(player: PlayableCharacter)
	{
		this.member.push(player);
	}

	removeMember(player: PlayableCharacter)
	{
		this.member = this.member.filter(member => member !== player);
	}
}

// Implementation. 

// Create Player
const joshua = new Warrior("Joshua Materanos", 300, 30, 35);
const xeronos = new Paladin("Xeronos", 100, 80, 50, 20);
const lucia = new Warrior("Lucia XII", 200, 27, 20);
const vivi = new Mage("Vivi", 100, 120, 20, 10);

// Create Party 
const aimtosonata = new Party("Aim to Sonata", [joshua, xeronos, vivi]);

// Create Enemy
const mafia = new EnemyCharacter("Mafia II", 120, 30, 10, ["Golden Ticket"]);
const mafiaLord = new BossEnemy("Mafia XX", 300, 45, 30, ["Premium Golden Ticket"]);

// Create NPC 
const moobin = new Villager("Moobin", "Hi I am Moobin. Nice to meet you.");
const villagerA = new Villager("Donavan", "Hello, It is a good day. What do you think?"); 
const sugarmania = new Merchant("Sugar Mania", "You can trade anything with me.");

const combatTest = () => 
{
	lucia.showStatus();
	mafia.showStatus();
	
	mafia.attack(lucia);
	lucia.attack(mafia);

	mafia.attack(lucia);
}

const npcTest = () =>
{
	villagerA.greet();
}

const skillTest = () => 
{
	const eveman = new EnemyCharacter("Eve Man", 200, 50, 20, []);
	const fire = new Skill("Fire", "Using fire to burn the enemies", 3, 5, false);

	vivi.useSkill(fire, eveman);
}

const partyTest = () =>
{
	const vivi = new Mage("Vivi", 100, 120, 20, 10);
	const lucia = new Warrior("Lucia XII", 200, 27, 20);

	const kotaroFamily = new Party("Kotaro Family", [vivi, lucia]);

	kotaroFamily.showMember();
	kotaroFamily.removeMember(vivi);
	kotaroFamily.showMember();
	kotaroFamily.addMember(vivi);
	kotaroFamily.showMember();
}

const bossFight = () =>
{
	mafiaLord.attack(vivi);
	mafiaLord.attack(vivi);

	vivi.attack(mafiaLord);
}

// combatTest();
// npcTest();
// skillTest();
// partyTest();
bossFight();


