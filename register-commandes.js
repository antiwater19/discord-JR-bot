const Conco = require('./Config.json');
const { REST, Routes } = require('discord.js');

// 명령어 목록 json
const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
    {
        name: 'today',
        description: '오늘의 민수 픽',
    },
    {
        name: 'ㅇㅇ',
        description: '입력한거 반환 받기',
    },
];

const rest = new REST({ version: '10'}).setToken(Conco.token);

(async()=>{
    try{
        console.log('Registering slash commands...');

        await rest.put(
            //특정 채팅채널에서 커맨드를 사용할수 있게 해주는 함수(클라이언트ID, 채팅채널ID)
            /*
            Routes.applicationGuildCommands(
                Conco.CLIENT_ID,
                Conco.GUILD_ID
            ),
            */
            Routes.applicationCommands(Conco.CLIENT_ID),
            { body: commands }
        );

        console.log('Slash commands were registered successfully!');
    }   catch (error){ // await가 실행이 안될 시 
        console.log(`There was an error: ${error}`);
    }
})();
