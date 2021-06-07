import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchTerm:string;
  MovieList:any[]=[];
  constructor(private M1:MoviedataService,private W1:WatchService) { }
  ngOnInit(): void 
  {
    console.log("ngOnint is called")
   this.M1.getMovieData().subscribe(
    data=>
    {
      this.MovieList=data.items;
      console.log(this.MovieList);
    },
    err=>
    {
      console.log("Error occured ",err);
    },
  )
  }

  checkMovie(p:any):boolean
  {
   
    if(this.W1.WatchList.indexOf(p)==-1)
    return true;
    else
    {
    console.log(this.W1.WatchList.length);
    return false;
    }
  }
  sendInfo(p:any)
  {
    this.W1.WatchList.push(p);
  }
  DelInfo(p:any)
  {
   let ind=this.W1.WatchList.indexOf(p);
    this.W1.WatchList.splice(ind,1);
  }
  add(ref:any)
  {
    let p=ref.value;
    this.searchTerm=p.Name;
    console.log(this.searchTerm);
  }
}
