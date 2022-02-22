import { RpgMap, MapData } from '@rpgjs/server'
import { NpcEvent } from '../events/npc'
import { ShopEvent } from '../events/shop'
import { Villager1Event } from '../events/ev1';
import { Villager4Event } from '../events/ev4';
import { ChestEvent } from '../events/chest';
import { FarmEvent } from '../events/farm';
import { Potion } from '../database/items/potion';

@MapData({
    id: 'medieval',
    file: require('./tmx/samplemap.tmx'),
    name: 'Town',
    events: [
        Villager1Event,
        Villager4Event,
        NpcEvent({
            name: 'EV-2',
            text: 'I find this city very quiet!',
            graphic: 'female13',
            type: "ai"
            // moveRandom: true
        }),
        NpcEvent({
            name: 'EV-3',
            text: 'It is beautiful today!',
            graphic: 'female19',
            type: "rem"
            // moveRandom: true
        }),
        ShopEvent,
        ChestEvent({
            name: 'chest-1',
            text: 'You got a potion!',
            gain: {
                item: Potion
            }
        }),
        FarmEvent({
            name: 'chest-2',
            text: 'here is farm',
            gain: {
                item: Potion
            }
        })
    ],
    sounds: ['town']
})
export class SampleMap extends RpgMap {
}