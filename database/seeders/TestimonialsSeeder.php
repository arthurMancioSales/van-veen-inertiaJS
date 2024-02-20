<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TestimonialsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('testimonials')->insert([
            ['id' => Str::uuid(), 'alumni' => 'Fulano 1', 'testimonial' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'university' => 'Universidade 1', 'photo' => 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg?w=740&t=st=1683325625~exp=1683326225~hmac=6bbe19ab443b16996211ed2e31885753d16c8828e823919b27259e1065efc5cc'],
            ['id' => Str::uuid(), 'alumni' => 'Fulano 2', 'testimonial' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'university' => 'Universidade 2', 'photo' => 'https://img.freepik.com/fotos-gratis/homem-de-negocios-feliz-em-pe-sorrindo-isolado-no-fundo-cinza-do-estudio-belo-retrato-masculino-com-metade-do-corpo-jovem-satisfazer-o-homem-emocoes-humanas-conceito-de-expressao-facial_155003-31361.jpg?w=740&t=st=1683325641~exp=1683326241~hmac=f4aa71e6d071e71201480b76887130890394fb18f0995caf1dda18634a9899ee'],
            ['id' => Str::uuid(), 'alumni' => 'Fulano 3', 'testimonial' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'university' => 'Universidade 3', 'photo' => 'https://img.freepik.com/fotos-gratis/jovem-afro-americano-bonito-com-camiseta-caqui_176420-32042.jpg?w=740&t=st=1683325663~exp=1683326263~hmac=f8d836e3bc4afbadf65b491d60573dec57e6f42e3976dba743204ac16c0e1aab'],
            ['id' => Str::uuid(), 'alumni' => 'Fulano 4', 'testimonial' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'university' => 'Universidade 4', 'photo' => 'https://img.freepik.com/fotos-gratis/retrato-de-corpo-inteiro-de-homem-barbudo-na-camisa-apontando-para-fora_171337-15725.jpg?w=360&t=st=1683325671~exp=1683326271~hmac=062fd5e1b86b6ff520b5044c2cdd1af2e7dca4822470d9d5e3697725dc455f99'],
            ['id' => Str::uuid(), 'alumni' => 'Fulano 5', 'testimonial' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'university' => 'Universidade 5', 'photo' => 'https://img.freepik.com/psd-gratuitas/retrato-de-mulher-de-negocios_23-2150116810.jpg?w=360&t=st=1683325680~exp=1683326280~hmac=ca0f48801a5dcac701c9325ddc126ec9a289976dc6b436a5d9cca3ea4353ebca'],
        ]);
    }
}
