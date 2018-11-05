import { FilesizePipe } from './filesize.pipe';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Component} from '@angular/core';

describe('Isolate testFilesizePipe', () => {

  const pipe = new FilesizePipe();
  it('should change file size from mb to gb', () => {
    expect(pipe.transform(123456789)).toBe('117.74MB');
  });
});


/*
Shallow Test*/

describe('FileSizePipe', () => {

  describe('Shallow FileSizePipe test', () => {

    @Component({
      template: `
        Size: {{ size | filesize }}
      `
    })
    class TestComponent {
          size = 123456789;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          FilesizePipe,
          TestComponent
        ]
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('should convert bytes to megabytes', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74MB');
      component.size = 1029281;
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 0.98MB');
    });
  })
