<?php

namespace App\Http\Resources\Plan;

use App\Http\Resources\Feature\FeatureResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
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
            'api_id' => $this->api_id,
            'image' => global_asset($this->image),
            'name' => $this->name,
            'amount' => $this->amount,
            'currency' => $this->currency,
            'interval' => $this->interval,
            'description' => $this->description,
            'status' => $this->status,
            'product_id' => $this->product_id,
            'limit_doctor' => $this->limit_doctor,
            'limit_assistant' => $this->limit_assistant,
            'limit_receptionist' => $this->limit_receptionist,
            'limit_patient' => $this->limit_patient,
            'limit_domains' => $this->limit_domains,
            'limit_purchases' => $this->limit_purchases,
            'limit_invoices' => $this->limit_invoices,
            'label_limit_doctor' => $this->label_limit_doctor,
            'label_limit_assistant' => $this->label_limit_assistant,
            'label_limit_receptionist' => $this->label_limit_receptionist,
            'label_limit_patient' => $this->label_limit_patient,
            'label_limit_domains' => $this->label_limit_domains,
            'label_limit_purchases' => $this->label_limit_purchases,
            'label_limit_invoices' => $this->label_limit_invoices,
            'features' => FeatureResource::collection($this->features()->get()),
            'is_popular' => $this->is_popular,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
