<?php

namespace Database\Seeders\Central;

use App\Models\GeneralSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CentralSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GeneralSetting::query()->firstOrCreate(['key' => 'app_logo', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_about', 'value' => 'Soft-Dental es el software ideal para la administración de consultorios dentales. Facilita tus tareas diarias, fortalece la relación con tus pacientes y aumenta la rentabilidad de tu clínica. ¡Dile adiós al papel!']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_address', 'value' => 'Mérida Yucatán, México 97370']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_country', 'value' => 'México']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_country_iso', 'value' => 'MX']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_email', 'value' => 'info@cesarchabuluac.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_name', 'value' => 'Soft-Dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_phone', 'value' => '+529995048783']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_short_description', 'value' => 'Manage Web Application']); 
        GeneralSetting::query()->firstOrCreate(['key' => 'app_theme', 'value' => 'ligth']);
        GeneralSetting::query()->firstOrCreate(['key' => 'app_version', 'value' => '1.0.0']);       
        GeneralSetting::query()->firstOrCreate(['key' => 'date_format', 'value' => 'l jS F Y (H:i:s)']);       
        GeneralSetting::query()->firstOrCreate(['key' => 'default_role', 'value' => 'Administrator']);
        GeneralSetting::query()->firstOrCreate(['key' => 'default_tax', 'value' => '16']);       
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_email_notification', 'value' => '1']);       
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_human_date_format', 'value' => '1']);       
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_mercadopago', 'value' => '1']);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_notifications', 'value' => '0']);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_paypal', 'value' => 1]);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_paypal_mode', 'value' => 0]);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_stripe_mode', 'value' => 0]);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_payu', 'value' => '1']);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_stripe', 'value' => 1]);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_tax', 'value' => '0']);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_twitter', 'value' => '0']);
        GeneralSetting::query()->firstOrCreate(['key' => 'enable_version', 'value' => '1']);       
        GeneralSetting::query()->firstOrCreate(['key' => 'fcm_key', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_api_key', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_app_id', 'value' => '1:103734427165:web:530bdfa7ae77acd38750f4']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_auth_domain', 'value' => 'soft-dental.firebaseapp.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_database_url', 'value' => 'soft-dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_measurement_id', 'value' => 'G-6ZPYX2LDJ5']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_messaging_sender_id', 'value' => '103734427165']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_project_id', 'value' => 'soft-dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_storage_bucket', 'value' => 'soft-dental.appspot.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'firebase_vapid_key', 'value' => 'BLJ84yT83BGbfrgOjK6ypqZHkAtnSpAdKR-7-uyw-oSpYnGR4SQ4vBsnzu7IYaTjkLhge2_vzUaR5G2VE8z8WGI']);
        GeneralSetting::query()->firstOrCreate(['key' => 'language', 'value' => 'es']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_driver', 'value' => 'smtp']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_from_address', 'value' => 'cesarchabuluac@gmail.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_from_name', 'value' => 'Soft-Dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_host', 'value' => 'in-v3.mailjet.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_mailjet_key', 'value' => '6f4280757e9979ba3f4f61b0c50d050f']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_mailjet_secret', 'value' => '74073a866e4923036a4a01a895382253']);
        GeneralSetting::query()->firstOrCreate(['key' => 'register_tenant_mailjet_template_id', 'value' => '5923956']);
        GeneralSetting::query()->firstOrCreate(['key' => 'trials_end_tenant_mailjet_template_id', 'value' => '5924648']);
        GeneralSetting::query()->firstOrCreate(['key' => 'invoice_reminder_tenant_mailjet_template_id', 'value' => '5924681']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_password', 'value' => '74073a866e4923036a4a01a895382253']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_port', 'value' => '465']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_encryption', 'value' => 'ssl']);    
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_support', 'value' => 'soporte@soft-dental.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mail_username', 'value' => '74073a866e4923036a4a01a895382253']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mercadopago_live_key', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mercadopago_live_secret', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mercadopago_live_url', 'value' => 'https://api.mercadopago.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mercadopago_mode', 'value' => 'sandbox']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mercadopago_sandbox_key', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mercadopago_sandbox_secret', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'mercadopago_sandbox_url', 'value' => 'https://api.mercadopago.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'password_expiry_days', 'value' => '7']);
        GeneralSetting::query()->firstOrCreate(['key' => 'paypal_live_client_id', 'value' => 'AX_yx8x8Yu3UmU7SyiSjhbAEQode_pb101qksycEzbHYjgjnsZT8lsfx4FU3qMAx4zmKiVbGbbuTg_pq']);
        GeneralSetting::query()->firstOrCreate(['key' => 'paypal_live_client_secret', 'value' => 'ELzN0aLIo0hJO4-pnYtKrvacZphZrkFuWXHtpwmMrim7dLPHL-rwnZJPRbjI8m0O33Syu3Gy90E3t3i0']);
        GeneralSetting::query()->firstOrCreate(['key' => 'paypal_live_url', 'value' => 'https://api.sandbox.paypal.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'paypal_sandbox_client_id', 'value' => 'AX_yx8x8Yu3UmU7SyiSjhbAEQode_pb101qksycEzbHYjgjnsZT8lsfx4FU3qMAx4zmKiVbGbbuTg_pq']);
        GeneralSetting::query()->firstOrCreate(['key' => 'paypal_sandbox_client_secret', 'value' => 'ELzN0aLIo0hJO4-pnYtKrvacZphZrkFuWXHtpwmMrim7dLPHL-rwnZJPRbjI8m0O33Syu3Gy90E3t3i0']);
        GeneralSetting::query()->firstOrCreate(['key' => 'paypal_sandbox_url', 'value' => 'https://api.sandbox.paypal.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'payu_mode', 'value' => 'sandbox']);
        GeneralSetting::query()->firstOrCreate(['key' => 'payu_sandbox_account_id', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'payu_sandbox_key', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'payu_sandbox_merchant_id', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'payu_sandbox_secret', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'payu_sandbox_url', 'value' => 'https://sandbox.api.payulatam.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'seo_description', 'value' => 'Soft-Dental, Es un Software especializado para la administración y Gestión de clinicas dentales en la nube, pensado y desarrolado por dentistas para dentistas.']);
        GeneralSetting::query()->firstOrCreate(['key' => 'seo_keyword', 'value' => 'soft dental, clinica, dental clinica dental, dentistas, clinica dental familiar, agenda de citas, presupuestos, documentos clinicos, pagos, laboratorio, Clínica dental Soft-Dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'seo_metatag', 'value' => 'soft dental, clinica, dental clinica dental, dentistas, clinica dental familiar, agenda de citas, presupuestos, documentos clinicos, pagos, laboratorio, Clínica dental Soft-Dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'seo_title', 'value' => 'Soft-Dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'socials_facebook', 'value' => 'https://es-la.facebook.com/dentalfamiliar/']);
        GeneralSetting::query()->firstOrCreate(['key' => 'socials_instagram', 'value' => 'https://www.instagram.com/dentalfamiliariquique/']);
        GeneralSetting::query()->firstOrCreate(['key' => 'socials_twitter', 'value' => 'https://twitter.com/dentaliquique/']);
        GeneralSetting::query()->firstOrCreate(['key' => 'socials_youtube', 'value' => '']);
        GeneralSetting::query()->firstOrCreate(['key' => 'stripe_live_key', 'value' => 'pk_test_51JzjgOLWWbKMZNQ9rG9ZrvBsci9phmQdyzuXF161hjD07Apj9XKE5umS9jXm5MTs99M3XV1NzLYsHmDdza3A0Ady00Nj0BJ3gS']);
        GeneralSetting::query()->firstOrCreate(['key' => 'stripe_live_secret', 'value' => 'sk_test_51JzjgOLWWbKMZNQ9a7sllLTyhZdHsY3BxLzaQPuZsnDVkWafhXzQBKWDvrsiMRad4CGpKmRP0GQ1fbfJIqparV5100aZEqVNZF']);
        GeneralSetting::query()->firstOrCreate(['key' => 'stripe_live_url', 'value' => 'https://api.stripe.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'stripe_mode', 'value' => 'sandbox']);
        GeneralSetting::query()->firstOrCreate(['key' => 'stripe_sandbox_key', 'value' => 'pk_test_51JzjgOLWWbKMZNQ9rG9ZrvBsci9phmQdyzuXF161hjD07Apj9XKE5umS9jXm5MTs99M3XV1NzLYsHmDdza3A0Ady00Nj0BJ3gS']);
        GeneralSetting::query()->firstOrCreate(['key' => 'stripe_sandbox_secret', 'value' => 'sk_test_51JzjgOLWWbKMZNQ9a7sllLTyhZdHsY3BxLzaQPuZsnDVkWafhXzQBKWDvrsiMRad4CGpKmRP0GQ1fbfJIqparV5100aZEqVNZF']);
        GeneralSetting::query()->firstOrCreate(['key' => 'stripe_sandbox_url', 'value' => 'https://api.stripe.com']);
        GeneralSetting::query()->firstOrCreate(['key' => 'support_name', 'value' => 'Soft-Dental']);
        GeneralSetting::query()->firstOrCreate(['key' => 'support_phone', 'value' => '+529995048783']);
        GeneralSetting::query()->firstOrCreate(['key' => 'theme_color', 'value' => 'primary']);
        GeneralSetting::query()->firstOrCreate(['key' => 'timezone', 'value' => 'America/Mexico_City']);
        GeneralSetting::query()->firstOrCreate(['key' => 'trial_day_count', 'value' => '14']);       
    }
}
