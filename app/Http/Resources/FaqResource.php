<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FaqResource extends JsonResource
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
            'icon' => $this->icon,
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'qandA' => $this->faqItems->map(function ($item) {
                return [
                    'question' => $item->question,
                    'ans' => $item->answer,
                ];
            }),
        ];
    }
}
