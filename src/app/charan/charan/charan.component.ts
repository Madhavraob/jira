import { ChangeDetectorRef, Component } from '@angular/core';
import * as shape from 'd3-shape';
import { CharanService } from '../charan.service';
@Component({
  selector: 'app-charan',
  templateUrl: './charan.component.html',
  styleUrls: ['./charan.component.scss']
})
export class CharanComponent {
  name = 'Angular 5';
  hierarchialGraph = { nodes: [], links: [] };
  curve = shape.curveBundle.beta(1);
  // curve = shape.curveLinear;

  constructor(private charanService: CharanService, private cd: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.getData();
    // this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [
      {
        id: 'start',
        label: 'start'
      },
      {
        id: '1',
        label: 'Event#a'
      },
      {
        id: '2',
        label: 'Event#x'
      },
      {
        id: '3',
        label: 'Event#b',
        position: 'x3'
      },
      {
        id: '4',
        label: 'Event#c'
      },
      {
        id: '5',
        label: 'Event#y'
      },
      {
        id: '6',
        label: 'Event#z'
      },
      {
        id: '7',
        label: 'Event#d'
      },
      {
        id: '8',
        label: 'Event#e'
      }
    ];

    this.hierarchialGraph.links = [
      {
        source: 'start',
        target: '1'
      },
      {
        source: 'start',
        target: '2',
        label: 'Process#2'
      },
      {
        source: '1',
        target: '3',
        label: 'Process#3'
      },
      {
        source: '2',
        target: '4',
        label: 'Process#4'
      },
      {
        source: '2',
        target: '6',
        label: 'Process#6'
      },
      {
        source: '3',
        target: '5'
      },
      {
        source: '3',
        target: '7'
      },
      {
        source: '7',
        target: '8'
      }
    ];
  }

  getData() {
    this.charanService.getData().subscribe(res => {
      this.hierarchialGraph.nodes = [
        {
          id: 'start',
          label: 'start'
        }
      ];
      this.hierarchialGraph.links = [];
      res.forEach(ele => {
        this.hierarchialGraph.nodes.push({
          id: ele.pk,
          label: ele.pk
        });
        this.hierarchialGraph.links.push({
          source: 'start',
          target: ele.pk
        });
      });
    });
  }

  getChildData(pk) {
    this.charanService.getChildData(pk).subscribe(res => {
      res.forEach(ele => {
        this.hierarchialGraph.nodes.push({
          id: ele.pk,
          label: ele.pk
        });
        this.hierarchialGraph.links.push({
          source: pk,
          target: ele.pk
        });
        // this.cd.detectChanges();
        this.getChildData(ele.pk);
      });
    });
  }
}