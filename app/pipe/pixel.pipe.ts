import { Pipe, PipeTransform } from '@angular/core';
/*
 * pack numeric dimensions into CSS friendly strings
 * Usage:
 *   value | px
 * Example:
 *   {{ 2 |  px}}
 *   formats to: "2px"
*/
@Pipe({ name: 'pixel' })
export class PixelPipe implements PipeTransform {
    transform(value: number): string {
        return value.toString() + "px";
    }
}