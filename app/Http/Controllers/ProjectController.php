<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $projects = Project::all();
        return Inertia::render(
            'Dashboard',[
                'projects' => $projects,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // return $request->all();
        $request->validate([
            'project_name' => 'required',
            'client' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'progress' => 'nullable',
        ]);

        try{
            Project::create([
                'project_name' => $request->project_name,
                'client' => $request->client,
                'project_leader' => Auth()->user()->id,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'progress' => $request->progress,
            ]);
            return redirect()->back()->with('success', 'Project added successfully!');
        }catch(Exception $e){
            return redirect()->back()->with('errors', 'Project added errors!');
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
        $project->delete();
        return redirect()->back()->with('success','Project deleted successfully!');
    }
}
