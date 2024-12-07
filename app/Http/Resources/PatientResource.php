<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'last_name' => $this->last_name,
            'mother_last_name' => $this->mother_last_name,
            'full_name' => trim("{$this->name} {$this->last_name} {$this->mother_last_name}"),
            'rut' => $this->rut ? $this->document_type . ' (' . $this->rut . ')' : '',
            'phone' => $this->phone,
            'cellphone' => $this->cellphone,
            'email' => $this->email,
            'total_debt' => $this->total_debt,
        ];
    }
}
