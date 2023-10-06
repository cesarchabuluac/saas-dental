<?php

namespace App\Http\Controllers;

use App\Http\Resources\FaqResource;
use App\Repositories\FaqRepository;
use Illuminate\Http\Request;

class CentralController extends Controller
{
    protected $faqRepository;

    public function __construct(FaqRepository $faqRepository)
    {
        $this->faqRepository = $faqRepository;
    }

    public function faqs()
    {
        $faqs = tenancy()->central(fn () => $this->faqRepository->with('faqItems')->get());
        return $this->sendResponse(FaqResource::collection($faqs), "FAQS retrievied successfully");
    }
}
