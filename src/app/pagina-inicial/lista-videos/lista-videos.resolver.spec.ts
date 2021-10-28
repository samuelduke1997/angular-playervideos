import { TestBed } from '@angular/core/testing';

import { ListaVideosResolver } from './lista-videos.resolver';

describe('ListaVideosResolver', () => {
  let resolver: ListaVideosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaVideosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
