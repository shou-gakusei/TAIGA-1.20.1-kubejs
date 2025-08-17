StartupEvents.registry(
    'block',
    event =>
    {
        const blocks =
            [
                'abyssum','adamant','astrium','aurorium',
                'basalt','dilithium','duranite','dyonite',
                'eezo','fractum','ignitz','imperomite',
                'iox','jauxum','karmesine','lumix',
                'meteorite','nihilite','niob','nucleum',
                'obsidiorite','osram','ovium','palladium',
                'prometheum','proxii','seismum','solarium',
                'terrax','tiberium','triberium','tritonite',
                'uru','valyrium','vibranium','violium',
                'yrdeen'
            ]
        for (let i = 0; i < blocks.length; i++)
        {
             let block_name = 'taigametalblocks:'+blocks[i]+"_block"
            event.create(block_name,'basic')
                .requiresTool(true)
                .tagBlock("minecraft:mineable/pickaxe")
                .tagBlock("minecraft:needs_diamond_tool")
                .hardness(3)
        }
    }
)