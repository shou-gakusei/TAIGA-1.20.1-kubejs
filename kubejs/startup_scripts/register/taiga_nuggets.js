StartupEvents.registry(
    'item',
    event =>
    {
        const nuggets =
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
        for (let i = 0; i < nuggets.length; i++)
        {
            let nugget_name = 'taiganuggets:'+nuggets[i]
            event.create(nugget_name,'basic')
        }
    }
)