StartupEvents.registry(
    'item',
    event =>
    {
        const ingots =
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
        for (let i = 0; i < ingots.length; i++)
        {
            let ingot_name = 'taigaingots:'+ingots[i]
            event.create(ingot_name,'basic')
        }
    }
)