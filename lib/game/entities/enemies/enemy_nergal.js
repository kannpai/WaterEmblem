/**
 *  enemy_nergal.js
 *  ---------------
 */

ig.module(
    'game.entities.enemies.enemy_nergal'
)
.requires(
    'game.entities.abstractities.base_enemy'
)
.defines(function() {
    'use strict';

    ig.global.EntityEnemy_nergal = ig.global.EntityBase_enemy.extend({
        entityClassName: ['EntityEnemy_nergal'],

        name: 'Nergal',

        animSheet: new ig.AnimationSheet('media/units/enemies/enemies_nergal.png', 32, 32),
        statMugshot: new ig.Image('media/statMugshots/players/nergal.png'),
        battleAnim: 'EntityEnemy_nergal_battleanim',

        init: function(x, y, settings) {
            // Stats
            this.level = 1;
            this.health_max = ig.game.generateRandomInt(40, 70);
            this.stat.str = ig.game.generateRandomInt(12, 20);
            this.stat.mag = ig.game.generateRandomInt(12, 20);
            this.stat.def = ig.game.generateRandomInt(12, 20);
            this.stat.skl = ig.game.generateRandomInt(12, 20);
            this.stat.res = ig.game.generateRandomInt(12, 20);
            this.stat.spd = ig.game.generateRandomInt(12, 20);
            this.stat.luk = ig.game.generateRandomInt(12, 20);
            this.stat.mov = 4;

            this.validWeapon = ['tome'];

            // Items
            this.item[0] = ig.game.itemCatalog.tome4;  this.item_uses[0] = this.item[0].uses;
            //this.item[1] = null;  this.item_uses[1] = this.item[1].uses;
            //this.item[2] = null;  this.item_uses[2] = this.item[2].uses;
            //this.item[3] = null;  this.item_uses[3] = this.item[3].uses;
            //this.item[4] = null;  this.item_uses[4] = this.item[4].uses;

            // Animation states
            this.addAnim('idle', 0.28, [0, 1, 2]);
            this.addAnim('up', 0.28, [5, 6, 7, 8]);
            this.addAnim('down', 0.28, [10, 11, 12, 13]);
            this.addAnim('left', 0.28, [10, 11, 12, 13]); // Repeat of 'down' animation
            this.addAnim('right', 0.28, [10, 11, 12, 13]); // Repeat of 'down' animation
            this.addAnim('attack', 0.28, [15, 16]);

            // IMPORTANT!! Keep these last in the unit's init() method. No exceptions!
            ig.game.recomputeStats(this);
            this.parent(x, y, settings);
        }
    });
});
