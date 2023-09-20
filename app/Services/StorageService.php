<?php

namespace App\Services;

use App\Models\Tenant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class StorageService
{
    protected $path;

    protected $tenant;

    public function setTenant(Tenant $tenant)
    {
        $this->tenant = $tenant;
        $this->path = $this->tenant->id;
    }

    /**
     * @param Request $request
     * @param string $fileName
     * @return false|string
     */
    public function saveFile(Request $request, string $fileName = '', $directory = 'general', $id)
    {
        $folder = $this->path . "/{$directory}/{$id}";
        if ($fileName === '') {
            $fileName = Carbon::now()->timestamp;
        }
        return $request->file($fileName)->store($folder, 'public');
    }

    /**
     * Store image from base64
     * @param string $image
     * @param $property_id
     * @return string
     */
    public function saveImageFromBase64(string $image, $directory = 'general', $id): string
    {
        $extension = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];   // .jpg .png .pdf
        $replace = substr($image, 0, strpos($image, ',') + 1);
        $image = str_replace($replace, '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = Carbon::now()->unix() . '.' . $extension;
        $fullPath = $this->path . "/{$directory}/$id/$imageName";
        Storage::disk('public')->put($fullPath, base64_decode($image));
        return $fullPath;
    }

    public function removeFile($fullPath)
    {
        // Analiza la URL para obtener la parte de la ruta
        $parsedUrl = parse_url($fullPath);

        // Verifica si existe la clave 'path' en el resultado del análisis
        if (isset($parsedUrl['path'])) {
            // La variable $relativePath contendrá la ruta relativa
            $relativePath = $parsedUrl['path'];

            // Elimina el prefijo '/storage' si es necesario
            // $relativePath = str_replace('/storage', '', $relativePath);

            // Ahora $relativePath contendrá la ruta relativa deseada
            @unlink(public_path($relativePath));
        }
    }
}
