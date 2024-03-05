<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AlumniSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('alumnis')->insert([
            ['id' => Str::uuid(), 'name' => 'marcella cardoso', 'approvals' => 1, 'university' => 'harvard medical school - EUA', 'photo' => 'https://media.discordapp.net/attachments/1071067950343258189/1210733643530633277/marcellaCardosojpg.jpg?ex=65eba292&is=65d92d92&hm=35c56282abb0034a049d8f5c6a6dac3e292fba1d2a44adf78a5c88ed93b9c19a&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'thomas mello', 'approvals' => 1, 'university' => 'erasmus business school - holanda', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736330892640266/thomasMelojpg.jpg?ex=65eba513&is=65d93013&hm=ad4129c2585cda569039467d63680d81438b7ac4833af62cba68ef899723dda4&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'dr. alisson brito', 'approvals' => 1, 'university' => 'coventry university - inglaterra', 'photo' => 'https://media.discordapp.net/attachments/1071067950343258189/1210733644113518602/alissonBrito.jpg?ex=65eba293&is=65d92d93&hm=f97167ef9c883219f79cf3916ab25ff2805b17a27762636486309d91dc99357c&=&format=webp&width=498&height=498'],
            ['id' => Str::uuid(), 'name' => 'diego castilho', 'approvals' => 1, 'university' => 'MIT - EUA', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736334709203025/diogoCastilho.jpg?ex=65eba514&is=65d93014&hm=35e587f36a9c24778533f2e5bcbccd5fb785070ef0518de3b0a6e6b757972321&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'maurício tizziani', 'approvals' => 1, 'university' => 'NASA - EUA', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210738711478673458/mauricioTizziani.jpg?ex=65eba74b&is=65d9324b&hm=fb90169db0c29ce60436ff525b251798c8f30968bf88991043df0b51f29bea8d&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'gustavo faria', 'approvals' => 1, 'university' => 'HSE university - rússia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736335065710602/gustavoFaria.jpg?ex=65eba514&is=65d93014&hm=8846ab404e4f437905e8073a1760129ca43fcc224fa047f94ddbf3d0fdce3316&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'ana rocha', 'approvals' => 1, 'university' => 'st. petesburgo university - rússia', 'photo' => 'https://media.discordapp.net/attachments/1071067950343258189/1210733642960212059/anaRocha.jpeg?ex=65eba292&is=65d92d92&hm=fb2e64c71fd5f1864ff3835eda31748cbd4137f65cc407565570134dda24930c&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'arno pedro', 'approvals' => 1, 'university' => 'Technical University Gheorghe Asachi Iasi - Romênia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736335514640424/arnoPedro.jpg?ex=65eba514&is=65d93014&hm=c2474c756bb65be440dc4f6fad101861bc7cfface94fea3731465c4131e1e863&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'mayara ribeiro', 'approvals' => 1, 'university' => 'hogeschool utrecht - holanda', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736335921610822/mayaraRibeiro.jpg?ex=65eba514&is=65d93014&hm=68ff33e26d9daaaaa154f37eb2a41d16dcbdbafd9e51b2aa5b952e16f285359d&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'tabata larissa', 'approvals' => 1, 'university' => 'HSE university - rússia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736336324136970/tabataLarissa.jpg?ex=65eba514&is=65d93014&hm=e58b9ee49bfe07e5e823d40c83a45d8ea16780bc06ec72786a2e9cb070d6541e&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'rebeca peres', 'approvals' => 1, 'university' => 'HSE university - rússia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736336705814638/rebecaPaes.jpg?ex=65eba515&is=65d93015&hm=4369bf8dc60bc9869e5793aa12d2e10967e912e95d7166b07269a71fc8ff6425&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'tifany andrade', 'approvals' => 1, 'university' => 'HSE university - rússia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736337066663967/tifanyAndrade.jpg?ex=65eba515&is=65d93015&hm=e128cd9009a7fc8a40d78d05fc533904f62850d12e073e357fb783707eb91719&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'nicolas roque', 'approvals' => 1, 'university' => 'Siberian State Academy of Arts - Rússia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736333463621632/nicolasRoque.jpeg?ex=65eba514&is=65d93014&hm=7c3f02596eeafab17663b317c6a28833f5fc5a5a04a75f692526d5dcd3081b78&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'vinícius bastos', 'approvals' => 1, 'university' => 'Sungkyungwan University - Coréia do Sul', 'photo' => 'https://media.discordapp.net/attachments/1071067950343258189/1210733643245293620/viniciusBastos.jpg?ex=65eba292&is=65d92d92&hm=106f0ffeca78e58a847c097f48c793a4472f69519161e6d2dbafcd02c81ed090&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'brian soares', 'approvals' => 1, 'university' => 'St. Brendan’s Sixth Form College - Reino Unido', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736333870604308/brian.jpeg?ex=65eba514&is=65d93014&hm=75bb656eb83da6b41658ac9393823455e17effb6285c839ca48fdfe8aca76023&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'wesley reis', 'approvals' => 1, 'university' => 'Moscow State University of Civil Engineering - Rússia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736334419791922/wesley.jpeg?ex=65eba514&is=65d93014&hm=531cb6342652f9a9327fa15e82cd0500ea951ec0e31c117119b207336e599d16&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'alice wiebusch', 'approvals' => 1, 'university' => 'Adams State University - EUA', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736330183807006/alice.jpg?ex=65eba513&is=65d93013&hm=b449c5c2343828006ed6165c1eafd00fbc8467bf6651eebad544bfd5a6d5cf6e&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'lucas catelani', 'approvals' => 1, 'university' => 'Novosibirsk National Research University - Rússia', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736330510700575/lucasCatelani.jpg?ex=65eba513&is=65d93013&hm=d7ba96287feb1daeba51d89fd6e1f162d9f95f520bc3e1f495e4d7dd2c3aa8eb&=&format=webp'],
            ['id' => Str::uuid(), 'name' => 'gabriela prince', 'approvals' => 1, 'university' => 'Stetson university', 'photo' => 'https://media.discordapp.net/attachments/1210735922413441106/1210736329961242745/gabrielaPrince.jpg?ex=65eba513&is=65d93013&hm=def63d500820cf1c4fc9efc9e8e0d9031684bb64651925cb357803c4310e9d83&=&format=webp'],
        ]);
    }
}
