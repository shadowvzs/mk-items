export const tagGroups = [
	{
		id: 1, // -
		name: 'Rarity',
		render: 'select'
	},
	{
		id: 2, // -
		name: 'Source',
		render: 'select'
	},
	{
		id: 3, // -
		name: 'Type',
		render: 'select'
	},
	{
		id: 5, //
		name: 'Tower',
		render: 'select'
	},
	{
		id: 9, //
		name: 'Chars',
		render: 'select'
	},
	{
		id: 11, //-
		name: 'When triggering',
		render: 'select'
	},
	{
		id: 4, //
		name: 'Combat',
	},
	{
		id: 6, // 
		name: 'Status',
	},
	{
		id: 7, //-
		name: 'Char Types',
	},
	{
		id: 8, // -
		name: 'State & Support',
	},
	{
		id: 10, //-
		name: 'Power',
	},
	{
		id: 12, //-
		name: 'Other',
	}

];

export const itemTags = [
	{ id: 1, name: 'common', group: 1 },
	{ id: 2, name: 'uncommon', group: 1 },
	{ id: 3, name: 'rare', group: 1 },
	{ id: 4, name: 'epic', group: 1 },

	{ id: 1000, name: 'normal', group: 2 },
	{ id: 1001, name: 'faction_war_store', group: 2 },
	{ id: 1002, name: 'tower_drop', group: 2 },
	{ id: 1003, name: 'from_quest', group: 2 },
	{ id: 1004, name: 'from_pack', group: 2 },

	{ id: 8, name: 'weapon', group: 3 },
	{ id: 9, name: 'armor', group: 3 },
	{ id: 10, name: 'accessory', group: 3 },

	{ id: 11, name: 'passive', group: 11 },
	{ id: 12, name: 'at_start', group: 11 },
	{ id: 13, name: 'tag_in', group: 11 },
	{ id: 14, name: 'tagged_in', group: 11 },
	{ id: 15, name: 'while_blocking', group: 11 },
	{ id: 16, name: 'brutality', group: 4 },
	{ id: 17, name: 'max_health', group: 8 },
	{ id: 18, name: 'toughness', group: 8 },
	{ id: 19, name: 'recovery', group: 8 },
	{ id: 20, name: 'resistance', group: 8 },
	{ id: 21, name: 'power_generation', group: 10 },
	{ id: 22, name: 'slow', group: 6 },
	{ id: 23, name: 'stun', group: 6 },
	{ id: 24, name: 'poison', group: 6 },
	{ id: 25, name: 'bleed', group: 6 },
	{ id: 26, name: 'fire', group: 6 },
	{ id: 27, name: 'while_opponent_blocking', group: 11 },
	{ id: 28, name: 'block_breaker', group: 4 },
	{ id: 29, name: 'damage_boost', group: 4 },
	{ id: 30, name: 'faction_war', group: 11 },
	{ id: 31, name: 'basic_attack', group: 4 },
	{ id: 32, name: 'critical_chance', group: 4 },
	{ id: 33, name: 'critical_chance_reduction', group: 8 },
	{ id: 34, name: 'damage_boost_tower', group: 8 },
	{ id: 35, name: 'max_health_tower', group: 8 },
	{ id: 36, name: 'freeze', group: 6 },
	{ id: 37, name: 'reduce_power_cost', group: 10 },
	{ id: 38, name: 'frostbite', group: 6 },
	{ id: 39, name: 'critical_damage' },
	{ id: 40, name: 'heal', group: 8 },
	{ id: 41, name: 'reflect', group: 4 },
	{ id: 42, name: 'martial_artist', group: 7 },
	{ id: 43, name: 'spec_ops', group: 7 },
	{ id: 44, name: 'outworld', group: 7 },
	{ id: 45, name: 'netherrealm', group: 7 },
	{ id: 46, name: 'elder_god', group: 7 },
	{ id: 47, name: 'resurrect', group: 8 },
	{ id: 48, name: 'strengthen', group: 6 },
	{ id: 49, name: 'power_bar', group: 10 },
	{ id: 50, name: 'effect_on_sp', group: 11 },
	{ id: 51, name: 'apply_dot', group: 4 },
	{ id: 52, name: 'when_low_hp', group: 11 },
	{ id: 53, name: 'enrage', group: 4 },
	{ id: 54, name: 'sp1', group: 4 },
	{ id: 55, name: 'sp2', group: 4 },
	{ id: 56, name: 'xray_or_fatal', group: 4 },
	{ id: 57, name: 'power_while_attacked', group: 10 },
	{ id: 58, name: 'combo_ender', group: 4 },
	{ id: 59, name: 'improve_dot', group: 8 },
	{ id: 60, name: 'on_combo_ender', group: 11 },
	{ id: 61, name: 'power_drain', group: 10 },
	{ id: 62, name: 'dispel', group: 8 },
	{ id: 63, name: 'when_critical', group: 11 },
	{ id: 64, name: 'damage_reduction', group: 8 },
	{ id: 65, name: 'weaken', group: 6 },
	{ id: 66, name: 'cripple', group: 6 },
	{ id: 67, name: 'debuff', group: 8 },
	{ id: 68, name: 'miss', group: 6 },
	{ id: 69, name: 'counter_attack', group: 11 },
	{ id: 70, name: 'nightmare', group: 6 },
	{ id: 71, name: 'death_mark', group: 6 },
	{ id: 72, name: 'reduction', group: 8 },
	{ id: 73, name: 'lethal', group: 8 },
	{ id: 74, name: 'regen', group: 8 },
	{ id: 75, name: 'duration', group: 8 },
	{ id: 76, name: 'invincibility', group: 8 },
	{ id: 77, name: 'snare', group: 6 },
	{ id: 78, name: 'shield_break', group: 6 },
	{ id: 79, name: 'attack', group: 4 },
	{ id: 80, name: 'shield', group: 8 },
	{ id: 82, name: 'buff', group: 8 },
	{ id: 83, name: 'speed', group: 6 },
	{ id: 84, name: 'tag_out', group: 11 },
	{ id: 85, name: 'pull_back', group: 6 },
	{ id: 86, name: 'deal_damage', group: 4 },
	{ id: 87, name: 'dodge', group: 4 },
	{ id: 88, name: 'purge', group: 6 },
	{ id: 89, name: 'blind', group: 6 },
	{ id: 90, name: 'dark_magic', group: 4 },
	{ id: 91, name: 'when_lethal', group: 11 },
	{ id: 92, name: 'stack', group: 8 },
	{ id: 93, name: 'attack_power', group: 8 },
	{ id: 94, name: 'incurability', group: 6 },
	{ id: 95, name: 'avoid', group: 4 },
	{ id: 96, name: 'vampirism', group: 6 },
	{ id: 97, name: 'on_block_breaker', group: 11 },
	{ id: 98, name: 'silence', group: 6 },
	{ id: 99, name: 'same_class', group: 11 },
	{ id: 100, name: 'fw_rate', group: 8 },
	{ id: 101, name: 'copy_buff', group: 8 },
	{ id: 102, name: 'luck', group: 6 },
	{ id: 103, name: 'on_opponent_ko', group: 11 },
	{ id: 104, name: 'soak', group: 4 },
	{ id: 105, name: 'loot_boost', group: 12 },
	{ id: 106, name: 'shorter_quest', group: 12 },
	{ id: 107, name: 'on_ressurect', group: 11 },
	{ id: 108, name: 'on_ko', group: 11 },
	{ id: 109, name: 'curse', group: 6 },
	{ id: 110, name: 'whole_team', group: 12 },
	{ id: 111, name: 'debuff_boost', group: 8 },
	{ id: 112, name: 'power_steal', group: 10 },
	{ id: 113, name: 'exhaust_power', group: 10 },
	{ id: 114, name: '-' },

	{ id: 200, name: 'tower_of_horror', group: 5 },
	{ id: 201, name: 'lin_kuei_tower', group: 5 },
	{ id: 202, name: 'black_dragon_tower', group: 5 },
	{ id: 203, name: 'shirai_ryu_tower', group: 5 },
	{ id: 204, name: 'nightmare_tower', group: 5 },
	{ id: 205, name: 'kold_war', group: 5 },
	{ id: 206, name: 'sorcerers_tower', group: 5 },
	{ id: 207, name: 'edenian_tower', group: 5 },
	{ id: 208, name: 'earthrealm_tower', group: 5 },
	{ id: 209, name: 'dark_queen_tower', group: 5 },
	{ id: 210, name: '-' },

	{ id: 400, name: 'sub_zero', group: 9 },
	{ id: 401, name: 'jason_voorhees', group: 9 },
	{ id: 402, name: 'freddy_krueger', group: 9 },
	{ id: 403, name: 'leatherface', group: 9 },
	{ id: 404, name: 'kitana', group: 9 },
	{ id: 405, name: 'kung_lao', group: 9 },
	{ id: 406, name: 'takeda', group: 9 },
	{ id: 407, name: 'bo_rai_cho', group: 9 },
	{ id: 408, name: 'cassie_cage', group: 9 },
	{ id: 409, name: 'jade', group: 9 },
	{ id: 410, name: 'quan_chi', group: 9 },
	{ id: 411, name: 'kano', group: 9 },
	{ id: 412, name: 'triborg', group: 9 },
	{ id: 413, name: 'jax_briggs', group: 9 },
	{ id: 414, name: 'goro', group: 9 },
	{ id: 415, name: 'tremor', group: 9 },
	{ id: 416, name: 'sindel', group: 9 },
	{ id: 417, name: 'noob_saibot', group: 9 },
	{ id: 418, name: 'd_vorah', group: 9 },
	{ id: 419, name: 'kintaro', group: 9 },
	{ id: 420, name: 'tanya', group: 9 },
	{ id: 421, name: 'sonya', group: 9 },
	{ id: 422, name: 'smoke', group: 9 },
	{ id: 423, name: 'jacqui_briggs', group: 9 },
	{ id: 424, name: 'mileena', group: 9 },
	{ id: 425, name: 'liu_kang', group: 9 },
	{ id: 426, name: 'kabal', group: 9 },
	{ id: 427, name: 'erron_black', group: 9 },
	{ id: 428, name: 'kotal_kahn', group: 9 },
	{ id: 429, name: 'reptile', group: 9 },
	{ id: 430, name: 'kenshi', group: 9 },
	{ id: 431, name: 'shao_kahn', group: 9 },
	{ id: 432, name: 'kung_jin', group: 9 },
	{ id: 433, name: 'shinnok', group: 9 },
	{ id: 434, name: 'scorpion', group: 9 },
	{ id: 435, name: 'shang_tsung', group: 9 },
	{ id: 436, name: 'ermac', group: 9 },
	{ id: 437, name: 'raiden', group: 9 },
	{ id: 438, name: 'johnny_cage', group: 9 },
	{ id: 439, name: 'terminator', group: 9 },
	{ id: 440, name: 'baraka', group: 9 },
	{ id: 441, name: 'rain', group: 9 },
	{ id: 442, name: 'nightwolf', group: 9 },
	{ id: 443, name: 'skarlet', group: 9 },
];

itemTags.valueMap = itemTags.reduce((obj, x) => (obj[x.id] = x, obj), {});
tagGroups.valueMap = tagGroups.reduce((obj, x) => (obj[x.id] = x, x.items = [], obj), {});

itemTags
	.filter(tag => tagGroups.valueMap[tag.group])
	.forEach(tag => tagGroups.valueMap[tag.group].items.push(tag));

tagGroups.forEach(tagGroup => {
	tagGroup.currentTagId = 0;
});
