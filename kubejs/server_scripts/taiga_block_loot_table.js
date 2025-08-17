ServerEvents.blockLootTables(
    event=>
    {
        const blocks =
            [
                'whfwtf:dilithium','whfwtf:abyssum','whfwtf:aurorium',
                'whfwtf:eezo','whfwtf:jauxum',
                'whfwtf:karmesine','whfwtf:osram','whfwtf:ovium',
                'whfwtf:tiberium','taigablocks:duranite_ore',
                'taigablocks:palladium_ore','taigablocks:prometheum_ore','taigablocks:uru_ore',
                'taigablocks:valyrium_ore','taigablocks:vibranium_ore',
            ]
        const ores =
            [
                'whfwtf:dilithium_crystal','whfwtf:raw_abyssum','whfwtf:raw_auronium',
                'whfwtf:raw_eezo',"whfwtf:raw_jauxum",
                'whfwtf:raw_karmesine','whfwtf:raw_osram','whfwtf:raw_ovium',
                'whfwtf:tiberium_crystal','whfwtf:raw_duranite',
                'whfwtf:raw_palladium','whfwtf:raw_prometheum','whfwtf:raw_uru',
                'whfwtf:raw_valyrium','whfwtf:raw_vibranium'
            ]
        for (let i=0;i<blocks.length;i++)
        {
            event.addBlock(
                blocks[i],
                loot=>
                {
                    loot.addPool(
                        pool=>
                        {
                            pool.addItem(ores[i])
                        }
                    )
                }
            )
        }

    }
)
