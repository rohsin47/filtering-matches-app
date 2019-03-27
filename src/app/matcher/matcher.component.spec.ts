import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By }              from '@angular/platform-browser';

import { MatcherComponent } from '../matcher/matcher.component';
import { UserFilter } from '../model/user-filter';
import { UserDataService } from '../service/user-data.service';

describe('MatchesComponent', () => {
  let component: MatcherComponent;
  let fixture: ComponentFixture<MatcherComponent>;
  let _tagListEl: HTMLElement;
  let userFinderService: UserDataService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcherComponent ],
      imports: [ FormsModule, HttpClientTestingModule ],
      providers: [ UserDataService ]
    })
    .compileComponents();
    userFinderService = TestBed.get(UserDataService);
    httpMock = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(MatcherComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table to display the users', () => {
    const table = fixture.debugElement.query(By.css('table'));
    var htmlElement = table.nativeElement;
    expect(htmlElement.innerHTML).toContain("thead");
  })

  it('should show default Search Form in h1 tag', () => {
    //const fixture = TestBed.createComponent(MatchesComponent);
    const de = fixture.debugElement.query(By.css('h1'));
    expect(de.nativeElement.textContent).toEqual('Search Form');
  });

  it('Form child elements Count', () => {
    _tagListEl = fixture.debugElement.query(By.css('form')).nativeElement;
    fixture.detectChanges();
    expect(_tagListEl.childElementCount).toEqual(10);
  });
  
});
