/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'APOLOZEA' // LOLHUMAN
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.namaowner = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'

//—————「 Setting Owner 」—————//
global.owner = ['51945463812']
global.nomerowner = '51 945-463-812'
global.premium = ['51945463812']

//—————「 Set Wm 」—————//
global.packname = '𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'SUSCRIBE\n\n\𝚈𝚃:SysSolutionsPeru'
global.prefa = ['#', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/54bdfdfaeadbda3984b82.jpg'
global.link = 'https://youtube.com/@dryanbot'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
