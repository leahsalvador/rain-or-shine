import { SpecsModel } from './../interfaces/specs.interface';
import { ProductColor } from './../interfaces/product/product-color.interface';
import { Colors } from './../interfaces/colors.interface';
import { ColorCollectionModel } from './../interfaces/color-colleciton.interface';
import { ProductModel } from './../interfaces/product/product.interface';
import { ProductCategoryModel } from './../interfaces/product/product-category.interface';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../enums/product-category.enum';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductCategoryModel [];
  searchProduct = false;
  allProducts: ProductModel [];
  allOriginal: ProductModel [];
  allPaintAndSeal: ProductModel [];
  allSista: ProductModel [];

  selectedProductCategory: ProductCategoryModel;
  selectedProduct: ProductModel;

  colorCollections: ColorCollectionModel [];
  colors: Colors;
  selectedColorCollection: ColorCollectionModel;

  rosCoverageProducts: ProductModel [];

  paintCalculatorProduct: number;

  specsList: SpecsModel [];
  selectedSpecProduct: ProductModel [];

  constructor(
    private file: File
  ) {
    console.log('Product service constructor');
  }

  init(){
    console.log('Initialize Product Service');

    // Initialize Colors
    this.initColor();

    // Initialize Product Catalogs
    this.initOriginal();
    this.initPaintAndSeal();
    this.initSista();
    this.initAllProducts();

    this.initCategory();
    // Set Default
    this.selectedProductCategory = this.products[0];

    // Intialize Color Collections
    this.initColorCollections();
    // Set Default
    this.selectedColorCollection = this.colorCollections[0];

    // Initialize ROS Coverage for paint calculate, choose paint page
    this.rosCoverageProducts = [ ...this.allOriginal, ...this.allPaintAndSeal ];

    // Init Specs
    this.initSpecs();
  }

  initSpecs(){
    this.specsList = [
      {
        name: 'Spec Sample 1',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 2',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 3',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 4',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 5',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 6',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 7',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 8',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 9',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
      {
        name: 'Spec Sample 10',
        total: this.allPaintAndSeal.length,
        product: this.allPaintAndSeal
      },
    ];
  }
  initCategory(){
    // Set Product Category
    this.products = [
      {
        id: ProductCategory.ALL,
        category: 'All Products',
        active: true,
        products: this.allProducts
      },
      {
        id: ProductCategory.PAINT_AND_SEAL,
        category: 'Paint & Seal',
        active: false,
        products: this.allPaintAndSeal
      },
      {
        id: ProductCategory.SISTA,
        category: 'Sista',
        active: false,
        products: this.allSista
      },
      {
        id: ProductCategory.ORIGINAL,
        category: 'Original',
        active: false,
        products: this.allOriginal
      }
    ];
  }

  initOriginal(){
    this.allOriginal = [
      {
        title: 'ROS Classic',
        subtitle: 'SEMI GLOSS TOP COAT',
        image: 'assets/products/Original/S-Classic.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Classic Elastomeric Semi-gloss Topcoat is a water-based waterproofing topcoat paint for interior
            and exterior concrete surfaces. It is resistant to ultra-violet light, dirt, dust and temperature variations. It
            can bridge hairline cracks of vertical concrete walls. Used in conjunction with Rain or Shine Elasto-Proofer or
            Rain or Shine Elasto-Tex, it can prevent efflorescence. It has excellent gloss retention and adhesion to
            well-prepared concrete surfaces.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Topcoat for concrete substrate</p>
            <p class="mt-0"><strong>Appearance:</strong> Semi-gloss</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 sq. per 4 litres, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat Rain or Shine Elasto-Proofer (ROS-8000) or Rain or Shine Elasto-Tex (ROS-9000) or
                Rain or Shine Prepa-White (ROS-7000).</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000) after the
                first coat of Rain or Shine Elasto-Proofer (ROS-8000) or Rain or Shine Elasto-Tex (ROS-9000) or Rain or Shine
                Prepa-White (ROS-7000). Let dry and then sand. Drying time of Rain or Shine Power Putty (ROS-5000) depends on
                the wet film thickness of the applied putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Topcoat with two coats Rain or Shine Classic Elastomeric Semi-gloss Topcoat. Allow 2-4 hours
                drying in between coats.</p>
            <p>&nbsp;</p>
            <p>Renovation/Repainting:</p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust-off before
                repainting.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat Rain or Shine Elasto-Proofer (ROS-8000) or Rain or Shine Elasto-Tex (ROS-9000) or
                Rain or Shine Prepa-White (ROS-7000) if needed.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor imperfections with Rain or Shine Power Putty (ROS-5000) after the first coat
                of Rain or Shine Elasto-Proofer (ROS-8000) or Rain or Shine Elasto-Tex (ROS-9000) or Rain or Shine Prepa-White
                (ROS-7000). Let dry and then sand. Drying time of Rain or Shine Power Putty (ROS-5000) depends on the wet film
                thickness of the applied putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Topcoat with two coats Rain or Shine Classic Elastomeric Semi-gloss Topcoat. Allow 2-4 hours
                drying in between coats. Increasing the number of coats will effectively improve the waterproofing capability
                and durability.</p>
            <p>&nbsp;</p>
            <p><em>Caution:</em></p>
            <p>Do not apply paint when humidity is high as heavy moisture content in the air will affect the performance of the
                coating</p>`,
            active: false
          },
        ],
        color: this.colors.classic,
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Dirt Shield',
        subtitle: 'Dirt Resisting Paint, Semi-gloss Finish',
        image: 'assets/products/Original/S-Dirt Shield.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Dirt Shield is a water-based waterproofing and dirt resisting paint for exterior concrete surfaces.
            </p>
            <p>It is resistant to ultra-violet light, dirt, dust and temperature variations. Used in conjunction with Rain or
                Shine Wall Mastic Extreme Waterproofing Paint, it can bridge hairline cracks of vertical concrete walls and
                prevent efflorescence. It has excellent gloss retention and adhesion to well-prepared concrete surfaces.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Top coat for concrete substrate</p>
            <p class="mt-0"><strong>Appearance:</strong> Semi-gloss</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 sq. per 4 litres depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `    <p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of ROS-7000 Rain or Shine Prepa-White, ROS-8000 Elasto-Proofer or Rain or Shine
                Wall Mastic Extreme Waterproofing as needed.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000). Let dry and
                then sand. Drying time of Rain or Shine Power Putty (ROS-5000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Dirt Shield Semi-Gloss Elastomeric Topcoat
                Paint. Allow 2-4 hours drying in between coats.</p>
            <p><em>Renovation/Repainting:</em></p>
            <p>Remove any flaking or peeling paint. Clean and sand old paint in good condition and dust-off before repainting.
            </p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of Rain or Shine Prepa-White or ROS-8000 Rain or Shine Elasto-proofer or Rain
                or Shine Wall Mastic Extreme Waterproofing as needed.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply Rain or Shine Power Putty (ROS-5000). Let dry and then sand. Drying time of Rain or
                Shine Power Putty (ROS-5000) depends on the wet film thickness of the applied putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Topcoat with two (2) to three (3) coats of Rain or Shine Dirt Shield Semi-Gloss Elastomeric
                Topcoat. Allow 2-4 hours drying in between coats. Increasing the number of coats will effectively improve the
                waterproofing capability and durability.</p>
            <p>&nbsp;</p>
            <p><em>Caution:</em></p>
            <p>Application is strictly prohibited if ambient temperatures are expected to fall below 28ºC or if rain is expected
                before the curing time of application has passed.</p>`,
            active: false
          },
        ],
        color: this.colors.dirt_shield,
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS ElastoFloor',
        subtitle: 'Concrete Floor Paint',
        image: 'assets/products/Original/S-ElastoFloor.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine ElastoFloor is an elastomeric water-based floor coating that is formulated to protect and adhere to
            most surfaces that require a durable and beautiful finish. It is highly recommended for basketball courts,
            tennis courts, badminton courts and other outdoor recreational and functional venues. It can also be applied to
            garages, driveways, kitchen areas, hallways and other indoor surfaces with light foot traffic. It has high UV
            ultra violet light resistance and no-slip feature makes it ideal and practical floor paint.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> For exterior and interior concrete Floor</p>
            <p class="mt-0"><strong>Appearance:</strong> Low sheen finish</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 square meters per 4 liters, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush, Roller or Airless Spray</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as package viscosity</p>`,
            active: false
          },
          {
            title: 'Surface Preparation',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>New surfaces:</em></p>
            <p>Clean the concrete floor with PWCT-0726 PREMIUM WELCOAT CLEANSING SOLUTION NO.1 by scrubbing with steel brush.
                Wipe –off with clean rag to remove softened dirt and grease. Repeat procedure as required. Wipe surface with rag
                soaked in PWCT-0727 PREMIUM WELCOAT CLEANSING SOLUTION NO.2. Let dry. Apply PWRC-7266 Acid Etching Compound.
                Leave for 15-20 minutes or until the concrete resembles the texture of fine sandpaper. Wipe the concrete surface
                with PWCT-0726 PREMIUM WELCOAT CLEANSING SOLUTION NO.1 to eliminate excess acid. Let dry for 24 hours before
                application of first coat.</p>
            <p><em>Old surfaces:</em></p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust off before
                repainting.</p>
            <p>&nbsp;</p>
            <p><strong>Application Procedure:</strong></p>
            <ol>
                <li>Apply 1 coat of Rain or Shine ElastoFloor (desired color).</li>
                <li>Repair all minor surface imperfections (small cracks) with Rain or Shine Power Putty (RoS-5000). Drying time
                    of Rain or Shine Power Putty (RoS-5000) depends on the wet film thickness of the applied putty. Let dry and
                    then sand.</li>
                <li>Apply two coats of Rain or Shine Elasto Floor. Allow 4 hours drying time in between coats. Increasing the
                    number of coats will effectively improve the waterproofing capability and durability.</li>
            </ol>
            <p>&nbsp;</p>
            <p><em>Caution:</em></p>
            <p>Application is prohibited if ambient temperatures are expected to fall below 28?C, or if rain is expected before
                the curing time of application has passed.</p>
            <p><em>&nbsp;</em></p>
            <p><em>Note:</em></p>
            <p>Allow 5 to 7 days curing time before allowing traffic.</p>`,
            active: false
          },
        ],
        color: this.colors.elastofloor,
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Elastomeric Paint',
        subtitle: 'Colorful Protection for your Home',
        image: 'assets/products/Original/S-Elastomeric Waterproofing.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Elastomeric Waterproofing paint is a self-priming water-based waterproofing paint for exterior and
            interior concrete surfaces.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Self-priming topcoat for concrete substrate</p>
            <p class="mt-0"><strong>Appearance:</strong> Low Sheen</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 sq. per 4 litres depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of Rain or Shine Fresco Odourless &amp; Antibacterial Paint or ROS-8000 Rain or
                Shine Elastoproofer as anti-efflorescence primer.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Mastic Putty (ROS-3000).Let dry and
                then sand. Drying time of Rain or Shine Mastic Putty (ROS-3000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two coats Rain or Shine Fresco Odourless &amp; Antibacterial Paint . Allow 2-4 hours
                drying in between coats.</p>
            <p>&nbsp;</p>
            <p><em>Renovation/Repainting:</em></p>
            <p>Remove any flaking or peeling paint. Clean and sand old paint in good condition and dust-off before repainting.
            </p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of Rain or Shine Fresco Odourless &amp; Antibacterial Paint or ROS-8000 Rain or
                Shine Elastoproofer as anti-efflorescence primer.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Mastic Putty (ROS-3000). Let dry and
                then sand. Drying time of Rain or Shine Mastic Putty (ROS-3000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two coats Rain or Shine Fresco Odourless &amp; Antibacterial Paint . Allow 2-4 hours
                drying in between coats.</p>
            <p>&nbsp;</p>
            <p><em>Caution:</em></p>
            <p>Do not apply paint when humidity is high as heavy moisture content in the air will affect the performance of the
                coating</p>`,
            active: false
          },
        ],
        color: [],
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Elasto-Proofer',
        subtitle: 'Anti-efflorescence / Undercoat Primer',
        image: 'assets/products/Original/S-Elasto-Proofer.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Elasto-Proofer is an elastomeric water proofer that is specifically formulated to protect concrete
            vertical walls against water penetration. It provides a highly flexible crack-bridging film with excellent
            alkali resistance for extra protection against efflorescence. It forms a breathable barrier that seals porous
            surfaces to keep water out while allowing water vapour to escape.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> For exterior &amp; interior concrete walls</p>
            <p class="mt-0"><strong>Appearance:</strong> Low Sheen Finish</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 sq. per 4 litres, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For New Concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with concrete neutralizer. Allow the surface to dry
                thoroughly. Dust-off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply one coat of Rain or Shine Elasto-proofer ROS-8000. Repair all minor surface
                imperfections with ROS-3000 Rain or Shine Mastic Putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Let dry and then sand. Drying time for Rain or Shine Mastic Putty ROS-3000 depends on the wet
                film thickness of applied putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply with two to three coats of Rain or Shine Topcoat.</p>
            <p>&nbsp;</p>
            <p><em>Renovation / Repainting:</em></p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust-off before
                repainting.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply one coat of Rain or Shine ElastoprooferROS-8000.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with ROS-3000 Rain or Shine Mastic Putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Let dry and then sand. Drying time of Rain or Shine Mastic Putty ROS-3000depends on the wet
                film thickness of applied putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Let dry and then sand. Apply two to three coats of Rain or Shine Topcoat.</p>`,
            active: false
          },
        ],
        color: [],
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Elasto-Tex',
        subtitle: 'Water-based Textured Paint Interior and Exterior Walls',
        image: 'assets/products/Original/S-Elasto-Tex.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Elasto-Tex is a water-based high-film build coating designed to produce a textured finish to hide
            wall imperfections and cover hairline cracks. Its flexible film has excellent adhesion to concrete surfaces. It
            is specifically formulated to protect concrete vertical walls against water penetration and efflorescence.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Textured body coat for exterior and interior concrete walls.</p>
            <p class="mt-0"><strong>Appearance:</strong> Low Sheen Textured Finish</p>
            <p class="mt-0"><strong>Coverage:</strong> 6-8 sq. per 4 litres, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Textured roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For New Concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with concrete neutralizer. Allow the surface to dry
                thoroughly. Dust-off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply one coat of Rain or Shine Elasto-Tex ROS-9000 using a textured roller. Let Dry.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2-3 coats of any Rain or Shine topcoat.</p>
            <p><em>Renovation / Repainting:</em></p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust-off before
                repainting.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat Rain or Shine Elasto-Tex ROS-9000 using a textured roller. Let dry.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2 to 3 coats of Rain or Shine Topcoat.</p>`,
            active: false
          },
        ],
        color: [],
        hasPaintCalculator: true,
        min: 6,
        max: 8,
        perLiter: 4
      },
      {
        title: 'ROS Elasto-Tint',
        subtitle: 'Colorful Protection for your Home',
        image: 'assets/products/Original/S-Elasto-Tint.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>A range of deep tone water base colorants used to produce tints from pastel to medium shades in Rain or Shine Waterproofing Paints. It gives excellent tinting strength and colour fastness.</p>
            <p>&nbsp;</p>
            <p><strong>CODE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DESCRIPTION:</strong></p>
            <p>ROS-11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Black</p>
            <p>ROS-21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toluidine Red</p>
            <p>ROS-22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Permanent Red</p>
            <p>ROS-26&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Permanent Maroon</p>
            <p>ROS-31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Permanent Orange</p>
            <p>ROS-40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Venetian Red</p>
            <p>ROS-43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Raw Umber</p>
            <p>ROS-46&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Burnt Umber</p>
            <p>ROS-50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hanza Yellow</p>
            <p>ROS-60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Raw Sienna</p>
            <p>ROS-65&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Burnt Sienna</p>
            <p>ROS-70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phthalo Blue</p>
            <p>ROS-77&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cobalt Blue</p>
            <p>ROS-87&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Permanent Violet</p>
            <p>ROS-90&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phthalo Green</p>`,
            active: true,
          }
        ],
        color: []
      },
      {
        title: 'ROS Fresco',
        subtitle: 'Protect your Home, Protect your Family',
        image: 'assets/products/Original/S-Fresco_Rise&Shine.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Fresco is an Odourless and Antibacterial elastomeric paint. It has very low Volatile Organic
            Compound (VOC) level which means it emits less pollutants into the environment and has virtually no odour at all
            unlike ordinary paints. It also comes with Antibacterial property that inhibits the growth of disease-causing
            bacteria like Escherichia Coli (E. coli) and Staphylococcus Aureus. These properties are important especially
            for places like bedrooms, restaurants, classrooms, hotel rooms and hospitals that needs to be hygienic and can
            be occupied as soon as possible after painting</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Self-priming topcoat for concrete substrate</p>
            <p class="mt-0"><strong>Appearance:</strong> Satin finish</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 sq. per 4 litres, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Water (5% maximum)</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of Rain or Shine Fresco Odourless &amp; Antibacterial Paint or ROS-8000 Rain or
                Shine Elasto-proofer as anti-efflorescence primer.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Mastic Putty (ROS-3000).Let dry and
                then sand. Drying time of Rain or Shine Mastic Putty (ROS-3000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two coats Rain or Shine Fresco Odourless &amp;Antibacterial Paint. Allow 2-4 hours
                drying in between coats.</p>
            <p>&nbsp;</p>
            <p><em>Renovation/Repainting:</em></p>
            <p>Remove any flaking or peeling paint. Clean and sand old paint in good condition and dust-off before repainting.
            </p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of Rain or Shine Fresco Odourless &amp; Antibacterial Paint or ROS-8000 Rain or
                Shine Elasto-proofer as anti-efflorescence primer.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Mastic Putty (ROS-3000). Let dry and
                then sand. Drying time of Rain or Shine Mastic Putty (ROS-3000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two coats Rain or Shine Fresco Odourless &amp; Antibacterial Paint. Allow 2-4 hours
                drying in-between coats.</p>
            <p>&nbsp;</p>
            <p><em>Caution:</em></p>
            <p>Do not apply paint when humidity is high as heavy moisture content in the air will affect the performance of the
                coating.</p>`,
            active: false
          },
        ],
        color: this.colors.fresco,
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Fresco: Shine Plus',
        subtitle: 'Shine Plus',
        image: 'assets/products/Original/S-Fresco_ShinePlus.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Fresco Shine plus is a low-odour additive for Rain or Shine Fresco. A semi-gloss finish is achieved
            when mixed with Rain or Shine Odourless and Antibacterial Interior Paint</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Appearance:</strong> Milky White Liquid</p>
            <p class="mt-0"><strong>Mixing Proportion:</strong> Add 1 litre Rain or Shine Fresco Shine Plus to 4 litres Rain or Shine Fresco to achieve a semi-gloss finish. If a
                lower gloss is desired, add less Rain or Shine Fresco Shine Plus.</p>
            <p class="mt-0"><strong>Note:</strong> Do not add more than the specified amount of Rain or Shine Fresco Shine Plus.</p>`,
            active: false
          }
        ],
        color: []
      },
      {
        title: 'ROS Hi-Gloss',
        subtitle: 'Diamond Shine',
        image: 'assets/products/Original/S-Hi Gloss.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Hi-Gloss Topcoat is a water-based waterproofing topcoat for interior and exterior concrete
            surfaces. It is resistant to ultra-violet light, dirt, dust and temperature varations. Used in conjunction with
            Rain or Shine Wall Mastic Extreme Waterproofing Paint or Rain or Shine Elasto-Proofer or Rain or Shine
            Elasto-Tex, it can bridge hairline cracks of vertical concrete walls and prevent efflorescence. It has excellent
            gloss retention and adhesion to well-prepared concrete surfaces.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Topcoat for concrete substrate</p>
            <p class="mt-0"><strong>Appearance:</strong> Gloss</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 sq. per 4 litres depending on the texture of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as package viscosity</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of Rain or Shine Wall Mastic Extreme Waterproofing Paint or Rain or Shine
                Prepa-White (ROS-7000) or Rain or Shine Elasto-Proofer (ROS-8000) or Rain or Shine Elasto-Tex (ROS-9000).</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000) after the
                first coat of Rain or Shine Wall Mastic Extreme Waterproofing Paint or Rain or Shine Prepa-White (ROS-7000) or
                Rain or Shine Elasto-Proofer (ROS-8000) if needed. Drying time of Rain or Shine Power Putty (ROS-5000) depends
                on the wet film thickness of the applied putty. Let dry and then sand.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) coats of Rain or Shine Hi-Gloss Elastomeric Topcoat Paint. Allow 2-4 hours
                drying in between coats.</p>
            <p><em>Renovation/Repainting:</em></p>
            <p>Remove any flaking or peeling paint. Clean and sand old paint in good condition and dust-off before repainting.
            </p>
            <p>&nbsp;&nbsp;&nbsp; Apply (1) coat of Rain or Shine Wall Mastic Extreme Waterproofing Paint or Rain or Shine
                Prepa-White (ROS-7000) or Rain or Shine Elasto-Proofer (ROS-8000) or Rain or Shine Elasto-Tex (ROS-9000).</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000) after the
                first coat of Rain or Shine Wall Mastic Extreme Waterproofing Paint or Rain or Shine Prepa-White (ROS-7000) or
                Rain or Shine Elasto-Proofer (ROS-8000) if needed. Drying time of Rain or Shine Power Putty (ROS-5000) depends
                on the wet film thickness of the applied putty. Let dry and then sand.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) coats of Rain or Shine Hi-Gloss Elastomeric Topcoat Paint. Allow 2-4 hours
                drying in between coats. Increasing the number of coats will effectively improve the waterproofing capability
                and durability.</p>
            <p>&nbsp;</p>
            <p><em>Caution:</em></p>
            <p>Application is strictly prohibited if ambient temperatures are expected to fall below 28ºC or if rain is expected
                before the curing time of application has passed.</p>`,
            active: false
          },
        ],
        color: this.colors.hi_gloss,
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Mastic Putty',
        subtitle: 'Water-based Elastomeric Putty',
        image: 'assets/products/Original/S-Mastic Putty.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Mastic Putty is a specially formulated water based elastomeric putty for repairing minor cracks,
            dents, scratches and other surface imperfections of masonry surfaces. It is used in conjunction with Rain or
            Shine Elastomeric Paint for exterior and interior applications.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Putty for masonry surfaces for interior and exterior applications</p>
            <p class="mt-0"><strong>Appearance:</strong> White Putty</p>
            <p class="mt-0"><strong>Coverage:</strong> 15-20 sq. per 4 litres depending on the surface defects and thickness of application</p>
            <p class="mt-0"><strong>Application Method:</strong> Putty Knife</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as package</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust-off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat Rain or Shine Elastomeric Waterproofing Paint or Rain or Shine Elasto-Proofer or
                Rain or Shine Prepa-White.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Mastic Putty (ROS-3000). Let dry and
                then sand. Drying time of Rain or Shine Mastic Putty (ROS-3000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2 coats Rain or Shine Elastomeric Waterproofing Paint or Rain or Shine Dirt Shield.
                Allow 3-4 hours drying in between coats. Increasing the number of coats will effectively improve the
                waterproofing capability and durability.</p>
            <p>&nbsp;</p>
            <p><em>Renovation/Repainting:</em></p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust-off before
                repainting.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat of Rain or Shine Elastomeric Waterproofing Paint. If a lighter colour is to be
                used over dark colours, apply1 coat ROS-7000 Rain or Shine Prepa-White. For extra protection against
                efflorescence, apply 1 coat ROS-8000 Rain or Shine Elasto-Proofer (plain finish) as primer for both interior and
                exterior application.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Mastic Putty (ROS-3000). Let dry and
                then sand. Drying time of Rain or Shine Mastic Putty (ROS-3000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2 coats Rain or Shine Elastomeric Waterproofing Paint or Rain or Shine Dirt Shield.
                Allow 3-4 hours drying in between coats. Increasing the number of coats will effectively improve the
                waterproofing capability and durability</p>`,
            active: false
          },
        ],
        color: [],
        hasPaintCalculator: true,
        min: 15,
        max: 20,
        perLiter: 4
      },
      {
        title: 'ROS Power Putty',
        subtitle: 'High Quality & Heavy Duty Full Body Elastomeric Putty',
        image: 'assets/products/Original/S-Power Putty.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Power Putty is a heavy duty water-based putty for repairing up to 3mm cracks, dents, scratches and
            other surface imperfections of masonry surfaces. It is used in conjunction with Rain or Shine Elastomeric
            Waterproofing Paint for exterior and interior applications.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Putty for masonry surfaces for interior and exterior applications</p>
            <p class="mt-0"><strong>Appearance:</strong> White Putty</p>
            <p class="mt-0"><strong>Coverage:</strong> 15-20 sq. per 4 litres depending on the surface defects and thickness of application</p>
            <p class="mt-0"><strong>Application Method:</strong> Putty Knife</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as package</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust-off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat Rain or Shine Elastomeric Waterproofing Paint or Rain or Shine Elasto-Proofer or
                Rain or Shine Prepa-White.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000). Let dry and
                then sand. Drying time of Rain or Shine Power Putty (ROS-5000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2 coats Rain or Shine Elastomeric Waterproofing Paint or Rain or Shine Dirt Shield.
                Allow 3-4 hours drying in between coats. Increasing the number of coats will effectively improve the
                waterproofing capability and durability.</p>
            <p>&nbsp;</p>
            <p><em>Renovation/Repainting:</em></p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust-off before
                repainting.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat of Rain or Shine Elastomeric Waterproofing Paint. If a lighter colour is to be
                used over dark colours, apply1 coat ROS-7000 Rain or Shine Prepa-White. For extra protection against
                efflorescence, apply 1 coat ROS-8000 Rain or Shine Elasto-Proofer (plain finish) as primer for both interior and
                exterior application.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000). Let dry and
                then sand. Drying time of Rain or Shine Power Putty (ROS-5000) depends on the wet film thickness of the applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2 coats Rain or Shine Elastomeric Waterproofing Paint or Rain or Shine Dirt Shield.
                Allow 3-4 hours drying in between coats. Increasing the number of coats will effectively improve the
                waterproofing capability and durability.</p>`,
            active: false
          },
        ],
        color: [],
        hasPaintCalculator: true,
        min: 5,
        max: 20,
        perLiter: 4
      },
      {
        title: 'ROS Prepa-White',
        subtitle: 'Extra Hiding Water-based Primer',
        image: 'assets/products/Original/S-Prepa-White.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine PREPA-WHITE is an all-purpose high opacity water-based undercoat for interior and exterior
            applications. It is an Elastomeric Waterproofing Primer uniquely formulated to have outstanding hiding ability
            and excellent waterproofing capability, compared to ordinary latex paint.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Primer for concrete substrate</p>
            <p class="mt-0"><strong>Appearance:</strong> Flat</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 square meters per 4 Litres per coat, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>For New Concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with concrete neutralizer. Allow the surface to dry
                thoroughly. Dust-off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply one coat of Rain or Shine PREPA-WHITE ROS-7000.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with ROS-3000 Rain or Shine Mastic Putty. Let dry and
                then sand. Drying time for Rain or Shine Mastic Putty ROS-3000depends on the wet film thickness of applied
                putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2-3 coats of any Rain or Shine topcoat.</p>
            <p><em>Renovation / Repainting:</em></p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust-off before
                repainting.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply one coat of Rain or Shine PREPA-WHITE ROS-7000.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with ROS-3000 Rain or Shine Mastic Putty. Let dry and
                then sand. Drying time for Rain or Shine Mastic Putty ROS-3000 depends on the wet film thickness of applied
                putty. Let dry and then sand.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 2-3 coats of any Rain or Shine topcoat. Allow 2-4 hours in between coats. Increasing the
                number of coats will effectively improve the waterproofing capability and durability.</p>`,
            active: false
          },
        ],
        color: [],
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Sun Roof',
        subtitle: 'Elastomeric Gloss Roof Paint',
        image: 'assets/products/Original/S-Sun Roof.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Sun Roof is an elastomeric water-based roof paint designed to protect and adhere to roof surfaces
            such as unglazed roof tiles and unpainted or pre-painted galvanized iron sheets. It ensures excellent weather
            and dirt pick-up resistance with its special formulation to combat corrosion, cracking, chalking and peeling. It
            comes in attractive and long lasting gloss colours.</p>`,
            active: true,
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p><em>GALVANIZED IRON SHEETS:</em></p>
            <p><em>For new unpainted galvanized iron sheets:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Apply Premium Welcoat Galva-Treat Solution (PWGT-0369) and rinse with clear water.</p>
            <p>&nbsp;&nbsp;&nbsp; Wipe the surface with cloth moistened with Premium Welcoat Lacquer Thinner (PWT-1610). Do not
                use turpentine or mineral spirits since they leave an oily deposit on the surface.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply Premium Welcoat Zinc Chromate Primer Yellow (PWPRE-6500) or Premium Welcoat Zinc
                Chromate Primer Green (PWPRE-6360).</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Sun Roof.</p>
            <p>&nbsp;</p>
            <p><em>For corroded galvanized iron sheets:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Remove rust by wire brushing and sanding.</p>
            <p>&nbsp;&nbsp;&nbsp; Treat with Premium Welcoat Rust Converter (PWRC-0276).</p>
            <p>&nbsp;&nbsp;&nbsp; Wipe with clean cloth moistened with Premium Welcoat Lacquer Thinner (PWT-1610) to eliminate
                unreacted rust converter.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply immediately with primer before rust sets in.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Sun Roof.</p>
            <p>&nbsp;</p>
            <p><em>For pre-painted galvanized iron sheets:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Sand the surface with sandpaper until dull.</p>
            <p>&nbsp;&nbsp;&nbsp; Wipe off with clean rag before applying paint.</p>
            <p>&nbsp;&nbsp;&nbsp; Spot prime if necessary.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Sun Roof.</p>
            <p>&nbsp;</p>
            <p><em>UNGLAZED ROOF TILES:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Treat the surface with Premium Welcoat Concrete Neutralizer (PWCN-7250). After neutralizing,
                wash with water and allow the surface to dry.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply Rain or Shine Elasto-proofer or Rain or Shine Roof Mastic.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Sun Roof.</p>`,
            active: false
          },
        ],
        color: this.colors.sunroof,
        hasPaintCalculator: true,
        min: 25,
        max: 30,
        perLiter: 4
      },
      {
        title: 'ROS Top White',
        subtitle: 'Durable Elastomeric Top Coat',
        image: 'assets/products/Original/S-Top White.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Top White is a water-based topcoat paint for interior and exterior concrete surfaces. Used in
            conjunction with Rain or Shine Elasto-Proofer or Rain or Shine Elasto-Tex or Rain or Shine Wall Mastic, it can
            bridge hairline cracks of vertical concrete walls and prevent efflorescence. It has high hiding and excellent
            adhesion to well-prepared concrete surfaces.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Topcoat for concrete substrate</p>
            <p class="mt-0"><strong>Appearance:</strong> Flat or semi-gloss</p>
            <p class="mt-0"><strong>Coverage:</strong> 20-25 sq. per 4 litres, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `<p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
            a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
            thoroughly. Dust-off crystalline deposits if there are any.</p>
            <p><em>For new concrete:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat Rain or Shine Elasto-Proofer or Rain or Shine Elasto-Tex or Rain or Shine Wall
                Mastic.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000) after the
                first coat, let dry and then sand. Drying time of Rain or Shine Power Putty (ROS-5000) depends on the wet film
                thickness of the applied putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Topcoat with two coats Rain or Shine Top White Paint. Allow 2-4 hours drying in between coats.
            </p>
            <p>&nbsp;</p>
            <p><em>Renovation / Repainting:</em></p>
            <p>Remove any flaking or peeling-off paint. Clean and sand old paint in good condition and dust-off before
                repainting.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat Rain or Shine Elasto-Proofer, Rain or Shine Elasto-Tex or Rain or Shine Wall
                Mastic.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000) after the
                first coat, let dry and then sand. Drying time of Rain or Shine Power Putty (ROS-5000) depends on the wet film
                thickness of the applied putty.</p>
            <p>&nbsp;&nbsp;&nbsp; Topcoat with two coats Rain or Shine Top White Paint. Allow 2-4 hours drying in between coats.
            </p>`,
            active: false
          },
        ],
        color: [],
        hasPaintCalculator: true,
        min: 20,
        max: 25,
        perLiter: 4
      },
      {
        title: 'ROS Xtra Gloss',
        subtitle: 'Colorful Protection for your Home',
        image: 'assets/products/Original/S-Xtra Gloss.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Xtra Gloss is an additive for Rain or Shine Elastomeric Waterproofing Paint. A semi-gloss finish is
            achieved when mixed with Rain or Shine Elastomeric Waterproofing Paint.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Appearance: Milky White Liquid</p>
            <p class="mt-0"><strong>Mixing Proportion: Add 1 litre Rain or Shine Xtra Gloss to 4 litres Rain or Shine Elastomeric Waterproofing Paint to achieve a
                semi-gloss finish. If a lower gloss is desired, add less Rain or Shine Xtra Gloss.</p>
            <p class="mt-0"><strong>Note:</strong> Don not add more than the specified amount of Rain or Shine Xtra Gloss.</p>`,
            active: false
          }
        ],
        color: []
      }
    ];
  }

  initPaintAndSeal(){
    this.allPaintAndSeal = [
      {
        title: 'ROS Deck Seal',
        subtitle: 'Roof Deck Sealer',
        image: 'assets/products/Paint & Seal/S-Deck Seal.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Ready to use mastic waterproof floor coating specially formulated for decks. Protects floors from rainwater
            leakage. Excellent crack bridging and elastomeric properties. High tensile strength. Covers hairline cracks.
            Prevents efflorescence. Protects and prolongs the lifetime of the building.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `
            <p class="mt-0"><strong>Use:</strong> For exterior concrete decks</p>
            <p class="mt-0"><strong>Appearance:</strong> Low sheen finish</p>
            <p class="mt-0"><strong>Coverage:</strong> 15-20 sq. per 4 litres depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as package viscosity</p>`,
            active: false
          },
          {
            title: 'Surface Preparation',
            // tslint:disable-next-line:max-line-length
            content: `
            <p><em>New surfaces:</em></p>
            <p>Brush, Roller or Airless Spray</p>
            <p>Clean the concrete floor with PWCT-0726 PREMIUM WELCOAT CLEANSING SOLUTION NO. 1 by scrubbing with steel brush.
                Wipe-off with clean rag to remove softened dirt and grease. Repeat procedure as required.</p>
            <p>Wipe surface with rag soaked in PWCT-0726 PREMIUM WELCOAT CLEANSING SOLUTION NO. 2. Let dry. Apply PWRC-7266 Acid
                Etching Compound. Leave for 15-20 minutes or until the concrete resembles the texture of fine sandpaper. Wipe
                the concrete surface with PWCT-0726 PREMIUM WELCOAT CLEANSING SOLUTION NO. 1 to eliminate excess acid.</p>
            <p>Let dry for 24 hours before application of first coat.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply 1 coat of Rain or Shine Deck Seal (desired colour).</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor surface imperfections with Rain or Shine Power Putty (ROS-5000). Drying time
                of Rain or Shine Power Putty (ROS-5000) depends on the wet film thickness of the applied putty. Let dry and then
                sand.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) coats of Rain or Shine Deck Seal. Allow 4 hours drying time in between coats.
                Increasing the number of coats will effectively improve the waterproofing capability and durability.</p>
            <p>&nbsp;</p>
            <p><em>Caution:</em></p>
            <p>Application is strictly prohibited if ambient temperatures are expected to fall below 28ºC or if rain is expected
                before the curing time of application has passed.</p>
            <p><em>&nbsp;</em></p>
            <p><em>Note:</em></p>
            <p>Allow 7 days curing time before allowing traffic.</p>`,
            active: false
          },
        ],
        color: this.colors.deck_seal,
        hasPaintCalculator: true,
        min: 15,
        max: 20,
        perLiter: 4
      },
      {
        title: 'ROS Hydro Lock',
        subtitle: 'Superior Water proofer, Negative and Positive Pressure',
        image: 'assets/products/Paint & Seal/S-Hydro Lock.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Hydro Lock is a super-premium waterproof coating that can withstand both negative and positive
            pressure. It is durable and applicable where masonry meets water. It seals, protect, beautifies, and is perfect
            for the most demanding conditions.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> For exterior and interior concrete walls</p>
            <p class="mt-0"><strong>Appearance:</strong> Low sheen finish</p>
            <p class="mt-0"><strong>Coverage:</strong> 15-20 sq. per 4 litres depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `
            <p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water and alkali to
                a safe level. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface to dry
                thoroughly. Dust off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply three (3) coats of Rain or Shine Hydro Lock. Do not reduce. Use as packaged.&nbsp; Allow
                to dry at least 4-6 hours in between coats.</p>
            <p>&nbsp;</p>
            <p><em>Note:</em></p>
            <p>Stir thoroughly before application and close lid immediately after using. Maybe applied on slightly damp surfaces
                but best results are obtained when applied over dry surfaces.</p>`,
            active: false
          }
        ],
        color: this.colors.hydrolock,
        hasPaintCalculator: true,
        min: 15,
        max: 20,
        perLiter: 4
      },
      {
        title: 'ROS Roof Mastic',
        subtitle: 'Paint and Sealant in One',
        image: 'assets/products/Paint & Seal/S-Roofmastic.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Roof Mastic is a premium quality formulation that is an excellent waterproofing coating for roofs
            and other surfaces. Rain or Shine Roof Mastic stops leaks, seals, waterproofs and protects any smooth,
            structurally sound roof when applied properly. It dries and cures to a virtually impenetrable, flexible,
            seamless, roof waterproofing protective membrane.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> Waterproofing for roofs</p>
            <p class="mt-0"><strong>Appearance:</strong> Low sheen</p>
            <p class="mt-0"><strong>Coverage:</strong> 15-20 square meters per 4 Litres per coat, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Surface Preparation',
            // tslint:disable-next-line:max-line-length
            content: `
            <p><em>Galvanized iron sheets:</em></p>
            <p><em>For new unpainted galvanized iron sheets:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Apply Premium Welcoat Galva-Treat Solution (PWGT-0369) and rinse with clear water.</p>
            <p>&nbsp;&nbsp;&nbsp; Wipe the surface with cloth moistened with Premium Welcoat Lacquer Thinner (PWT-1610). Do not
                use turpentine or mineral spirits since they leave an oily deposit on the surface.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply Premium Welcoat Zinc Chromate Primer Yellow (PWPRE-6500) or Premium Welcoat Zinc
                Chromate Primer Green (PWPRE-6360).</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Roof Mastic</p>
            <p><em>For corroded galvanized iron sheets:</em></p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp; Remove rust by wire brushing and sanding.</p>
            <p>&nbsp;&nbsp;&nbsp; Treat with Premium Welcoat Rust Converter (PWRC-0276).</p>
            <p>&nbsp;&nbsp;&nbsp; Wipe with clean cloth moistened with Premium Welcoat Lacquer Thinner (PWT-1610) to eliminate
                unreacted rust converter.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply immediately with primer before rust sets in.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Roof Mastic</p>
            <p><em>For pre-painted galvanized iron sheets:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Sand the surface with sandpaper until dull.</p>
            <p>&nbsp;&nbsp;&nbsp; Wipe off with clean rag before applying paint.</p>
            <p>&nbsp;&nbsp;&nbsp; Spot prime if necessary.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) to three (3) coats of Rain or Shine Roof Mastic</p>
            <p><em>Unglazed roof tiles:</em></p>
            <p>&nbsp;&nbsp;&nbsp; Treat the surface with Premium Welcoat Concrete Neutralizer (PWCN-7250). After neutralizing,
                wash with water and allow the surface to dry.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply two(2) to three(3) coats of Rain or Shine Roof Mastic.</p>`,
            active: false
          }
        ],
        color: this.colors.roofmastic,
        hasPaintCalculator: true,
        min: 15,
        max: 20,
        perLiter: 4
      },
      {
        title: 'ROS Wall Mastic',
        subtitle: 'Extreme Waterproofing Paint',
        image: 'assets/products/Paint & Seal/S-Wall Mastic.jpg',
        content: [
          {
            title: 'Description',
            // tslint:disable-next-line:max-line-length
            content: `<p>Rain or Shine Wall Mastic Extreme Waterproofing Paint is a very high quality, premium product that looks better
            and lasts longer. It is a new generation, top-of-the-line elastomeric coating that can solve most of your
            waterproofing problems.</p>`,
            active: true,
          },
          {
            title: 'Material Description',
            // tslint:disable-next-line:max-line-length
            content: `<p class="mt-0"><strong>Use:</strong> For exterior and interior concrete walls</p>
            <p class="mt-0"><strong>Appearance:</strong> Low sheen finish</p>
            <p class="mt-0"><strong>Coverage:</strong> 15-20 square meters per 4 Litres per coat, depending on the porosity of the surface</p>
            <p class="mt-0"><strong>Application Method:</strong> Brush or Roller</p>
            <p class="mt-0"><strong>Reduction:</strong> Use as packaged</p>`,
            active: false
          },
          {
            title: 'Application',
            // tslint:disable-next-line:max-line-length
            content: `
            <p><em>For new concrete:</em></p>
            <p>New concrete should be given enough curing time ranging from one week to one month to reduce water content and
                alkalinity to safe levels. Excess alkalinity should be neutralized with Concrete Neutralizer. Allow the surface
                to dry thoroughly. Dust off crystalline deposits if there are any.</p>
            <p>&nbsp;&nbsp;&nbsp; Apply one (1) coat of Rain or Shine Wall Mastic Extreme Waterproofing Paint.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor imperfections with Rain or Shine Power Putty (ROS-5000). Drying time of Rain
                or Shine Power Putty (ROS-5000) depends on the wet film thickness of the applied putty. Let dry and then sand.
            </p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) coats of Rain or Shine Wall Mastic Extreme Waterproofing Paint. Allow 4 hours
                drying time in-between coats.</p>
            <p>&nbsp;</p>
            <p><em>Note:</em> Stir thoroughly before application and close lid immediately after using.</p>
            <p><em>Renovation/Repainting:</em></p>
            <p>Remove any flaking or peeling off paint. Clean and sand old paint in good condition and dust-off before
                repainting. For areas with moulds and fungi remove all visible moulds and fungi using steel brush. Treat the
                surface with two (2) coats wet on wet Premium Welcoat Fungicide and Mildew Remover (PWFR-1003).</p>
            <p>&nbsp;&nbsp;&nbsp; Apply one (1) coat of Rain or Shine Wall Mastic Extreme Waterproofing Paint.</p>
            <p>&nbsp;&nbsp;&nbsp; Repair all minor imperfections with Rain or Shine Power Putty (ROS-5000). Drying time of Rain
                or Shine Power Putty (ROS-5000) depends on the wet film thickness of the applied putty. Let dry and then sand.
            </p>
            <p>&nbsp;&nbsp;&nbsp; Apply two (2) coats of Rain or Shine Wall Mastic Extreme Waterproofing Paint. Allow 4 hours
                drying time in between coats.</p>`,
            active: false
          }
        ],
        color: this.colors.wallmastic,
        hasPaintCalculator: true,
        min: 15,
        max: 20,
        perLiter: 4
      },
    ];
  }

  initSista(){
    this.allSista = [
      {
        title: 'Sista D100',
        subtitle: 'Premium Acrylic Roof Sealer',
        image: 'assets/products/Sista/S-D100.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Ready to use</li>
            <li>Weather-resistant</li>
            <li>UV-resistant</li>
            <li>Impervious to water</li>
            <li>High elastic and flexible</li>
            <li>All seasons repair</li>
            <li>Do not crack when dry</li>
            <li>Overpaintable</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<p>Water-based acrylic synthesis roof coating for jointless sealing and repair of roofs with a lot cracks and water
            seeping, gutter.</p>
            <p>Adhere well on all type of materials; wood, concrete, zinc galvanize,&nbsp; aluminum, ceramic tiles. Ideal for
                repairing all joints and cracks.</p>
            <p>&nbsp;</p>
            <p><strong>Coverage: </strong>1 kg./1 sqm. (at 1 mm. thickness)</p>
            <p><strong>Packaging: </strong>1kg. | 4kg. | 25kg.</p>
            <p><strong>Color: </strong>Grey</p>`,
            active: false,
          },
        ],
        color: []
      },
      {
        title: 'Sista F101 Plus',
        subtitle: '100% Neutral Sanitary Silicone Sealant',
        image: 'assets/products/Sista/S-F101.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>100% silicone sealant</li>
            <li>Neutral</li>
            <li>Not shrinkage after cure</li>
            <li>Adhere to a wide range of materials and finishes including plastics (PVC).</li>
            <li>Long life reliability</li>
            <li>Contain a fungicide to resist the growth of mould and mildew</li>
            <li>Excellent resistance to weathering, UV radiation, vibration, moisture, ozone, temperature extremes, airborne
                pollutants cleaning detergents, and many solvents.</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<p>Sista F101 PLUS Sanitary Sealant is a 100% silicone sealant, high performance neutral type, developed to resist
            the growth of mould and mildew where conditions of high humidity and temperature exist.</p>
            <p>It is ideal for use in and around bathroom, laundry sinks, ceramic tiles and etc.</p>
            <p>&nbsp;</p>
            <p><strong>Packaging:</strong> 300ml</p>
            <p><strong>Color: </strong>Transparent and White</p>`,
            active: false,
          },
        ],
        color: []
      },
      {
        title: 'Sista F109',
        subtitle: 'Multipurpose Silicon Sealant',
        image: 'assets/products/Sista/S-F109.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>100% silicone sealant</li>
            <li>Neutral</li>
            <li>Not shrinkage after cure</li>
            <li>Odorless for multipurpose use</li>
            <li>Universal sealant for most materials</li>
            <li>Flexible, non-aging, non-fading</li>
            <li>Compatible with alkaline and metal substrates</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Expansion-stressed joints in building construction</li>
            <li>For sealing glazing in wooden, metal and plastic windows</li>
            <li>For sealing wall claddings and sheets</li>
            <li>For sealing gap around windows and doors</li>
            <li>For edge sealing on metal sections and components.</li>
            <li>For sealing gap around sanitary ware</li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>Packaging:</strong> 300ml</p>
            <p><strong>Color: </strong>Transparent and White</p>
            <p>&nbsp;</p>`,
            active: false,
          },
        ],
        color: []
      },
      {
        title: 'Sista F134',
        subtitle: 'Highly Elastic Acrylic Sealant',
        image: 'assets/products/Sista/S-F134.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Highly elastic acrylic sealant</li>
            <li>Interior and exterior usage</li>
            <li>Solvent free and odourless</li>
            <li>Weather-resistant</li>
            <li>Adhere well to many construction materials</li>
            <li>Overpaintable</li>
            <li>Easy to apply</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Highly elastic for sealing of building joints which are subject to movement, joints around wood, metal and
                plastic window and door frames.</li>
            <li>Not suited for use on underwater joints, nor for joints which are subject to frequent wetting (i.e.
                bathrooms and similar wet areas)</li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>Packaging: </strong>300ml</p>
            <p><strong>Color: </strong>White</p>`,
            active: false,
          },
        ],
        color: []
      },
      {
        title: 'Sista F130',
        subtitle: 'Elastic Acrylic Sealant',
        image: 'assets/products/Sista/S-F130.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Water-based acrylic sealant, non-toxic and odorless</li>
            <li>ADhere to moist absorbent grounds</li>
            <li>Self-adhering to most surfaces without primer</li>
            <li>Overpaintable</li>
            <li>Easy to apply</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Acrylic sealant water-based for seals joint and cracks</li>
            <li>Adhere to wood, aluminum, brick, stone and gypsum board</li>
            <li>Can seal gaps between wall/skirting board, wall/door and window frames and wooden furniture</li>
          </ul>
          <p>&nbsp;</p>
          <p><strong>Packaging: </strong>300ml</p>
          <p><strong>Color: </strong>White, Oak and Brown</p>`,
            active: false,
          },
        ],
        color: []
      },
      {
        title: 'Polymer Sealant',
        subtitle: '',
        image: 'assets/products/Sista/S-Polymer.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Very high performance sealant with long durability</li>
            <li>Good adhesion on all substrates without primer</li>
            <li>Can be applied to all materials</li>
            <li>Suitable for damp/wet surface application</li>
            <li>High elastic and resist to movements</li>
            <li>Isocyanate free</li>
            <li>Weather-resistant</li>
            <li>UV-resistant and high temperature resistant. Do not crack when dry</li>
            <li>Excellent elongation (&gt; 900%)</li>
            <li>Overpaintable</li>
            <li>Non shrinkage as 100% solid content</li>
            <li>Both indoor and outdoor application</li>
            <li>Non bubble when sealant completely dry</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<p>Polymer sealant, developed for sealing joints and cracks, especially for exterior applications with high joint
            movement</p>
            <p>Ideal for sealing joints on aluminum composite,precast and all materials</p>
            <p>&nbsp;</p>
            <p><strong>Packaging: </strong>380ml and 600ml</p>
            <p><strong>Color: </strong>White and Grey</p>`,
            active: false,
          },
        ],
        color: []
      },
      {
        title: 'Sista Re-New',
        subtitle: '',
        image: 'assets/products/Sista/S-Renew.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<p>RE-NEW is the easiest way to keep your joints in perfect condition! No need to take out the old joint, apply over the existing joint and it is done!</p>
            <ul>
            <li>Easy to apply</li>
            <li>Mould resistant</li>
            <li>Innovative silicone based formula</li>
            <li>Perfect adhesion</li>
            <li>Coverage of all joints</li>
            <li>Odorless</li>
            <li>Easy to clean</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Covers joint cracks thanks to perfect adhesion to all silicone</li>
            <li>Cover and stop existing mould, prevent future growth. Re-New contains a triple protection system for a
                long-term mould protection</li>
            <li>Easy to apply with innovative packaging; ergonomic squeezy bottle with a flexible integrated auto-smoothing
                applicator</li>
            <li>No need to take out existing joint</li>
            <li>Applicable for vertical and horizontal joints in bathroom, showers, toilets, laundry rooms and kitchens</li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>Packaging:</strong> 100ml</p>
            <p><strong>Color: </strong>White</p>`,
            active: false,
          },
        ],
        color: []
      },
      {
        title: 'Sista Smart Sealing Tape',
        subtitle: '',
        image: 'assets/products/Sista/S-Sealing Paint.jpg',
        content: [
          {
            title: 'Characteristic',
            // tslint:disable-next-line:max-line-length
            content: `<ul>
            <li>Self-adhesive aluminum faced with modified rubber tape</li>
            <li>Ready to use</li>
            <li>Weather-resistant</li>
            <li>Water pressure resistant</li>
            <li>UV-resistant</li>
            <li>High elastic and flexible</li>
            <li>Work on wet/damp substrates</li>
            <li>Overpaintable</li>
            </ul>`,
            active: true,
          },
          {
            title: 'Fields of Application',
            // tslint:disable-next-line:max-line-length
            content: `<p>Adhere well with all substrates, use fo flashing, sealing and repair roof joints, gutter, profile sheet. Easy to
            apply with hand pressure</p>
            <p>&nbsp;</p>
            <p><strong>Packaging: </strong>Width 100 mm, Length 3 and 10 meters</p>`,
            active: false,
          },
        ],
        color: []
      }
    ];
  }

  initAllProducts(){
    this.allProducts = [ ...this.allSista, ...this.allOriginal, ...this.allPaintAndSeal ];
  }

  initColor(){
    this.colors = {
      // tslint:disable-next-line:max-line-length
      main_colors : [{hex: '#FBF8F3', file_no: '01', name: 'Gentle Touch ROS-530', dark: true}, {hex: '#FCEFEC', file_no: '02', name: 'Romance ROS-175', dark: true}, {hex: '#FFFCEB', file_no: '03', name: 'Bridal Gown ROS-559', dark: true}, {hex: '#FFFBE1', file_no: '04', name: 'Milk ROS-809', dark: true}, {hex: '#FFF4DE', file_no: '05', name: 'Tulip ROS-629', dark: true}, {hex: '#FEF6D9', file_no: '06', name: 'Light Apricot ROS-638', dark: true}, {hex: '#F4E9C9', file_no: '07', name: 'Sugarcane ROS-853', dark: true}, {hex: '#F8EECB', file_no: '08', name: 'China White ROS-818', dark: true}, {hex: '#F4E2BA', file_no: '09', name: 'Coconut ROS-739', dark: true}, {hex: '#E2CDA0', file_no: '10', name: 'Cappuccino ROS-623', dark: true}, {hex: '#FEE7A7', file_no: '11', name: 'Ivory ROS-862', dark: true}, {hex: '#FEF3A7', file_no: '12', name: 'Red Earth ROS-285', dark: true}, {hex: '#FDD883', file_no: '13', name: 'Honey Bun ROS-239', dark: true}, {hex: '#FDEF88', file_no: '14', name: 'Citrus ROS-513', dark: true}, {hex: '#E9E081', file_no: '15', name: 'Mango ROS-635', dark: true}, {hex: '#F6DA6F', file_no: '16', name: 'French Vanilla ROS-619', dark: true}, {hex: '#FED55F', file_no: '17', name: 'Golden Butter ROS-678', dark: true}, {hex: '#DFBC6A', file_no: '18', name: 'Sunshine Yellow ROS-206', dark: true}, {hex: '#FEDD4F', file_no: '19', name: 'Cheese RO-333', dark: true}, {hex: '#FEE44B', file_no: '20', name: 'Happy Days ROS-618', dark: true}, {hex: '#FCC25C', file_no: '21', name: 'Sweet Corn ROS-808', dark: true}, {hex: '#F5AE64', file_no: '22', name: 'Boracay ROS-339', dark: true}, {hex: '#FBC795', file_no: '23', name: 'Irvine Peach ROS-313', dark: true}, {hex: '#F9BD9E', file_no: '24', name: 'Angelina ROS-363', dark: true}, {hex: '#F49171', file_no: '25', name: 'Amber Rose ROS-350', dark: true}, {hex: '#F69C70', file_no: '26', name: 'Red Earth ROS-285', dark: true}, {hex: '#E28D68', file_no: '27', name: 'Bittersweet ROS-777', dark: true}, {hex: '#E27346', file_no: '28', name: 'Sunkiss ROS-247', dark: true}, {hex: '#F27E41', file_no: '29', name: 'Orange Twist ROS-203', dark: true}, {hex: '#F09E20', file_no: '30', name: 'Gold Rush ROS-529', dark: true}, {hex: '#F68C1E', file_no: '31', name: 'Lucky Orange ROS-888', dark: true}, {hex: '#EFD4B7', file_no: '32', name: 'Candy Turf ROS-367', dark: true}, {hex: '#D4AE89', file_no: '33', name: 'Natural Tan ROS-359', dark: true}, {hex: '#C1966C', file_no: '34', name: 'Mocha ROS-186', dark: true}, {hex: '#A88164', file_no: '35', name: 'Safari Brown ROS-538', dark: true}, {hex: '#875942', file_no: '36', name: 'Terra Cotta ROS-101', dark: false}, {hex: '#724A30', file_no: '37', name: 'Maple ROS-965', dark: false}, {hex: '#8C4122', file_no: '38', name: 'Red Earth ROS-285', dark: false}, {hex: '#8B2F22', file_no: '39', name: 'Victory Red ROS-889', dark: false}, {hex: '#6E2A15', file_no: '40', name: 'Tile Red ROS-302', dark: false}, {hex: '#351D13', file_no: '41', name: 'Choco Brown ROS-633', dark: false}, {hex: '#F9BEBA', file_no: '42', name: 'Nicole Pink ROS-223', dark: true}, {hex: '#F5A5A4', file_no: '43', name: 'Princess ROS-813', dark: true}, {hex: '#D1747C', file_no: '44', name: 'Foxy ROS-393', dark: true}, {hex: '#BE535B', file_no: '45', name: 'Watermelon ROS-168', dark: false}, {hex: '#E65041', file_no: '46', name: 'True Orange ROS-252', dark: false}, {hex: '#C52A28', file_no: '47', name: 'Oh So Red ROS-298', dark: false}, {hex: '#B92928', file_no: '48', name: 'Vibrant Ruby ROS-823', dark: false}, {hex: '#D8D1A5', file_no: '49', name: 'Antique White ROS-270', dark: true}, {hex: '#A69A82', file_no: '50', name: 'Light Biege ROS-353', dark: true}, {hex: '#A2987F', file_no: '51', name: 'Beige ROS-901', dark: true}, {hex: '#83796D', file_no: '52', name: 'Arcadia ROS-757', dark: false}, {hex: '#6E7275', file_no: '53', name: 'Stone Gray ROS-115', dark: false}, {hex: '#EDF6F3', file_no: '54', name: 'Touch of Gray ROS-171', dark: true}, {hex: '#EDF6F3', file_no: '55', name: 'Snow ROS-233', dark: true}, {hex: '#EBF6F2', file_no: '56', name: 'Faith ROS-781', dark: true}, {hex: '#AEB8B0', file_no: '57', name: 'Neutral Gray ROS-883', dark: true}, {hex: '#8CA6B7', file_no: '58', name: 'Powder Blue ROS-389', dark: true}, {hex: '#E5F0D0', file_no: '59', name: 'Serenity ROS-381', dark: true}, {hex: '#CAE5D6', file_no: '60', name: 'Faraway Blue ROS-370', dark: true}, {hex: '#BBDFC5', file_no: '61', name: 'Cool Water ROS-928', dark: true}, {hex: '#B5DAA4', file_no: '62', name: 'Cool Mint ROS-933', dark: true}, {hex: '#9CD19B', file_no: '63', name: 'My Way ROS-368', dark: true}, {hex: '#B6C67D', file_no: '64', name: 'Lime ROS-138', dark: true}, {hex: '#C8DD76', file_no: '65', name: 'Fresh Mint ROS-829', dark: true}, {hex: '#D8E265', file_no: '66', name: 'Pistachio ROS-238', dark: true}, {hex: '#B1D362', file_no: '67', name: 'Temptation ROS-518', dark: true}, {hex: '#95BA74', file_no: '68', name: 'Archer Green ROS-728', dark: true}, {hex: '#338A43', file_no: '69', name: 'Bright Green ROS-728', dark: false}, {hex: '#317157', file_no: '70', name: 'Asian Gree ROS-929', dark: false}, {hex: '#1D5538', file_no: '71', name: 'Baguio Green ROS-701', dark: false}, {hex: '#B7DCD4', file_no: '72', name: 'Tiffany ROS-835', dark: true}, {hex: '#62BEAF', file_no: '73', name: 'Aquamarine ROS-505', dark: true}, {hex: '#45767A', file_no: '74', name: 'Maritime Blue ROS-735', dark: false}, {hex: '#72CDE0', file_no: '75', name: 'Blue Heaven ROS-218', dark: true}, {hex: '#62C1E1', file_no: '76', name: 'Aqua Blue ROS-587', dark: true}, {hex: '#428ECC', file_no: '77', name: 'Blue Denim ROS-501', dark: true}, {hex: '#00a5df', file_no: '78', name: 'Blue Ocean ROS-723', dark: true}, {hex: '#00739a', file_no: '79', name: 'China Blue ROS-762', dark: false}, {hex: '#005689', file_no: '80', name: 'Royal Blue ROS-301', dark: false}, {hex: '#AECDE9', file_no: '81', name: 'Lavender ROS-309', dark: true}, {hex: '#8F7BB8', file_no: '82', name: 'Violet ROS-801', dark: true}, {hex: '#61217F', file_no: '83', name: 'Royal Purple ROS-909', dark: false}, {hex: '#501268', file_no: '84', name: 'Color Purple ROS-999', dark: false}],
      // tslint:disable-next-line:max-line-length
      deck_seal : [{hex: '#FFFFFF', file_no: '01', name: 'Deck White ROS-DK 100', dark: true}, {hex: '#D6D6CE', file_no: '02', name: 'Deck Gray ROS-DK 112', dark: true}, {hex: '#E2CDB2', file_no: '03', name: 'Deck Beige ROS-DK 131', dark: true}, {hex: '#E6C331', file_no: '04', name: 'Deck Yellow ROS-DK 624', dark: true}, {hex: '#D2191F', file_no: '05', name: 'Deck Red ROS-DK 219', dark: false}, {hex: '#8D4A2D', file_no: '06', name: 'Deck Brown ROS-DK 402', dark: false}, {hex: '#214A22', file_no: '07', name: 'Deck Green ROS-DK 909', dark: false}, {hex: '#263F81', file_no: '08', name: 'Deck Blue ROS-DK 722', dark: false}, {hex: '#0F100A', file_no: '09', name: 'Deck Black ROS-DK 116', dark: false}],
      // tslint:disable-next-line:max-line-length
      classic: [{hex: '#FFFFFF', file_no: '01', name: 'White ROS-CL 100', dark: true}, {hex: '#FDF5F2', file_no: '02', name: 'Ceramic White ROS-CL 118', dark: true}, {hex: '#FCF7E4', file_no: '03', name: 'Satin White ROS-CL 123', dark: true}, {hex: '#F6EFD8', file_no: '04', name: 'White Smoke ROS-CL 189', dark: true}, {hex: '#E6E1C4', file_no: '05', name: 'Tropical Sand ROS-CL 157', dark: true}, {hex: '#F0E1C0', file_no: '06', name: 'Boardwalk ROS-CL 196', dark: true}, {hex: '#E6DDB4', file_no: '07', name: 'LOng Beach ROS-CL 161', dark: true}, {hex: '#FDEF88', file_no: '08', name: 'Warm Yellow ROS-CL 527', dark: true}, {hex: '#FEE481', file_no: '09', name: 'Yellowstone ROS-CL 575', dark: true}, {hex: '#FEE52E', file_no: '10', name: 'Sunflower ROS-CL 567', dark: true}, {hex: '#F38548', file_no: '11', name: 'Four Seasons ROS-CL 330', dark: true}, {hex: '#91643B', file_no: '12', name: 'Brown Leather ROS-CL 655', dark: false}, {hex: '#FAD1B9', file_no: '13', name: 'Pink Salmon ROS-CL 318', dark: true}, {hex: '#DDB995', file_no: '14', name: 'Natural Wood ROS-CL 173', dark: true}, {hex: '#EFA9A3', file_no: '15', name: 'Pink Blush ROS-CL 208', dark: true}, {hex: '#D2593E', file_no: '16', name: 'Lipstick ROS-CL 383', dark: false}, {hex: '#BDBDBB', file_no: '17', name: 'Hard Rock ROS-CL 103', dark: true}, {hex: '#C7D9F1', file_no: '18', name: 'Frozen ROS-CL 789', dark: true}, {hex: '#1A6BAD', file_no: '19', name: 'Smart Blue ROS-CL 709', dark: false}, {hex: '#B5DAA4', file_no: '20', name: 'Green Meadow ROS-CL 925', dark: true}, {hex: '#015730', file_no: '21', name: 'Dollar Green ROS-CL 903', dark: false}],
      // tslint:disable-next-line:max-line-length
      dirt_shield : [{hex: '#FFFFFF', file_no: '01', name: 'White ROS-DS 100', dark: true}, {hex: '#FFFCE9', file_no: '02', name: 'Pristine ROS-DS 117', dark: true}, {hex: '#F8E6C0', file_no: '03', name: 'Beachfront ROS-DS 155', dark: true}, {hex: '#FFEBB6', file_no: '04', name: 'Morning Sun ROS-DS 593', dark: true}, {hex: '#D5C8A5', file_no: '05', name: 'Khaki ROS-DS 190', dark: true}, {hex: '#F1C97A', file_no: '06', name: 'Peanut Butter ROS-DS 357', dark: true}, {hex: '#C0A975', file_no: '07', name: 'Good Earth ROS-DS 181', dark: true}, {hex: '#786346', file_no: '08', name: 'Arabica ROS-DS 675', dark: false}, {hex: '#FDEBD4', file_no: '09', name: 'White Chocolate ROS-DS 129', dark: true}, {hex: '#FBD3B0', file_no: '10', name: 'Melon ROS-DS 308', dark: true}, {hex: '#F1C89C', file_no: '11', name: 'Biscuit ROS-DS 608', dark: true}, {hex: '#FBC5A1', file_no: '12', name: 'Sunset ROS-DS 336', dark: true}, {hex: '#F9C19E', file_no: '13', name: 'Tropical Punch ROS-DS 398', dark: true}, {hex: '#F8C2BB', file_no: '14', name: 'Sweet 16 ROS-DS 216', dark: true}, {hex: '#D2191F', file_no: '15', name: 'Bullseye ROS-DS 275', dark: false}, {hex: '#D5DBCD', file_no: '16', name: 'Iceberg ROS-DS 105', dark: true}, {hex: '#BBE0C1', file_no: '17', name: 'Urban Jungle ROS-DS 907', dark: true}, {hex: '#B0C662', file_no: '18', name: 'Wasabi ROS-DS 936', dark: true}, {hex: '#004427', file_no: '19', name: 'Amazon ROS-DS 973', dark: false}, {hex: '#D6D6CE', file_no: '20', name: 'Cloud Nine ROS-DS 193', dark: true}, {hex: '#CAB8CE', file_no: '21', name: 'Orchid ROS-DS 803', dark: true}, {hex: '#AC96C4', file_no: '22', name: 'Spring Break ROS-DS 878', dark: true}, {hex: '#A8C9D8', file_no: '23', name: 'Sky Light ROS-DS 715', dark: true}, {hex: '#B2C7E6', file_no: '24', name: 'Lilac ROS-DS 815', dark: true}, {hex: '#959FA1', file_no: '25', name: 'Concrete Gray ROS-DS 178', dark: true}, {hex: '#668BA8', file_no: '26', name: 'Moonlight ROS-DS 733', dark: true}, {hex: '#5C6670', file_no: '27', name: 'Almost Black ROS-DS 153', dark: false}, {hex: '#214D70', file_no: '28', name: 'Deep Blue ROS-DS 750', dark: false}, {hex: '#EFDB6B', file_no: '29', name: 'Summer Fun ROS-DS 510', dark: true}, {hex: '#FDE528', file_no: '30', name: 'Sunrise ROS-DS 555', dark: true}, {hex: '#FAB260', file_no: '31', name: 'Pot of Gold ROS-DS 373', dark: true}, {hex: '#F78F50', file_no: '32', name: 'Orange County ROS-DS 325', dark: true}, {hex: '#B87E58', file_no: '33', name: 'Caramel ROS-DS 631', dark: true}, {hex: '#8D4A2D', file_no: '34', name: 'Fire Dance ROS-DS 253', dark: false}],
      // tslint:disable-next-line:max-line-length
      elastofloor : [{hex: '#FFFFFF', file_no: '01', name: 'White ROS-EF 1010', dark: true}, {hex: '#E1CAA8', file_no: '02', name: 'Beige ROS-EF 1993', dark: true}, {hex: '#B2BEBE', file_no: '03', name: 'Gray ROS-EF 1126', dark: true}, {hex: '#E8C11E', file_no: '04', name: 'Yellow ROS-EF 5050', dark: true}, {hex: '#D22127', file_no: '05', name: 'Red ROS-EF 2611', dark: false}, {hex: '#A94E2F', file_no: '06', name: 'Tile Red ROS-EF 4030', dark: false}, {hex: '#1E442B', file_no: '07', name: 'Green ROS-EF 9010', dark: false}, {hex: '#30469C', file_no: '08', name: 'Blue ROS-EF 7010', dark: false}, {hex: '#231F20', file_no: '09', name: 'Black ROS-EF 1130', dark: false}],
      // tslint:disable-next-line:max-line-length
      fresco : [{hex: '#FFFFFF', file_no: '01', name: 'White ROS F300', dark: true}, {hex: '#FFFFFF', file_no: '02', name: 'Clean White ROS F130', dark: true}, {hex: '#E4E7DC', file_no: '03', name: 'Bio White ROS F183', dark: true}, {hex: '#E1E2D0', file_no: '04', name: 'Marble Gray ROS F125', dark: true}, {hex: '#D3E4A0', file_no: '05', name: 'Morning Breeze ROS F958', dark: true}, {hex: '#C2DFA9', file_no: '06', name: 'Rain Drop ROS F919', dark: true}, {hex: '#B9DBB6', file_no: '07', name: 'Green Tea ROS F988', dark: true}, {hex: '#1FB585', file_no: '08', name: 'Meadow ROS F930', dark: false}, {hex: '#FFF5DA', file_no: '09', name: 'Belgian Waffle ROS F179', dark: true}, {hex: '#FDF8D6', file_no: '10', name: 'Marshmallow ROS F165', dark: true}, {hex: '#F2F2DA', file_no: '11', name: 'Magnolia ROS F108', dark: true}, {hex: '#EAE1BA', file_no: '12', name: 'Muffin ROS F686', dark: true}, {hex: '#FEEBBC', file_no: '13', name: 'Sweet Mocha ROS F623', dark: true}, {hex: '#FEF7A2', file_no: '14', name: 'Buttermilk ROS F585', dark: true}, {hex: '#FEEFA1', file_no: '15', name: 'Mellow Yellow ROS F537', dark: true}, {hex: '#FBE484', file_no: '16', name: 'Lemonade ROS F529', dark: true}, {hex: '#FEC740', file_no: '17', name: 'Rise and Shine ROS F516', dark: true}, {hex: '#FBDFD3', file_no: '18', name: 'Cotton Candy ROS F628', dark: true}, {hex: '#FBC5A9', file_no: '19', name: 'Lollipop ROS F303', dark: true}, {hex: '#F5B5BB', file_no: '20', name: 'Bubblegum ROS F211', dark: true}, {hex: '#F2ADA6', file_no: '21', name: 'Its a Girl ROS F232', dark: true}, {hex: '#C4987D', file_no: '22', name: 'Hot Chocolate ROS F637', dark: true}, {hex: '#773E35', file_no: '23', name: 'Coffee ROS F658', dark: false}, {hex: '#A71B1E', file_no: '24', name: 'Hot Sauce ROS F219', dark: false}, {hex: '#DEDDEF', file_no: '25', name: 'Fresh Water ROS F812', dark: true}, {hex: '#C2AFCF', file_no: '26', name: 'Cool Morning ROS F865', dark: true}, {hex: '#877EB3', file_no: '27', name: 'By The Bay ROS F898', dark: true}, {hex: '#CBE8EC', file_no: '28', name: 'Bubble ROS F793', dark: true}, {hex: '#6FB0C2', file_no: '29', name: 'Cool Rain ROS F727', dark: true}, {hex: '#97B8E1', file_no: '30', name: 'Forget Me Not ROS F837', dark: true}, {hex: '#60A9D6', file_no: '31', name: 'Its a Boy ROS F760', dark: true}, {hex: '#4981BE', file_no: '32', name: 'Blue Moon ROS F711', dark: true}, {hex: '#D1D1D1', file_no: '33', name: 'Polished Rock ROS F158', dark: true}, {hex: '#A9A9A9', file_no: '34', name: 'Platinum ROS F113', dark: true}, {hex: '#5F6565', file_no: '35', name: 'Charcoal Gray ROS F137', dark: false}, {hex: '#010302', file_no: '36', name: 'Black ROS F311', dark: false}],
      // tslint:disable-next-line:max-line-length
      hi_gloss : [{hex: '#FFFFFF', file_no: '01', name: 'White ROS-HG 100', dark: true}, {hex: '#F6F6F6', file_no: '02', name: 'Adobe White ROS-HG 128', dark: true}, {hex: '#DDE8E2', file_no: '03', name: 'Misty ROS-HG 159', dark: true}, {hex: '#B6B6B6', file_no: '04', name: 'Ashly ROS-HG 185', dark: true}, {hex: '#64635F', file_no: '05', name: 'Metal Gray ROS-HG 172', dark: false}, {hex: '#FED430', file_no: '06', name: 'Solar Yellow ROS-HG 519', dark: true}, {hex: '#D8954E', file_no: '07', name: 'Golden State ROS-HG 630', dark: true}, {hex: '#9A632A', file_no: '08', name: 'Ginger Bread ROS-HG 305', dark: false}, {hex: '#786346', file_no: '09', name: 'Brownies ROS-HG 608', dark: false}, {hex: '#743A26', file_no: '10', name: 'Maple Leaf ROS-HG 625', dark: false}, {hex: '#401C10', file_no: '11', name: 'Choco Brown ROS-HG 673', dark: false}, {hex: '#D2191F', file_no: '12', name: 'Red Label ROS-HG 229', dark: false}, {hex: '#B0C662', file_no: '13', name: 'Galaxy Green ROS-HG 920', dark: true}, {hex: '#3C6731', file_no: '14', name: 'Crystal Green ROS-HG 929', dark: false}, {hex: '#668BA8', file_no: '15', name: 'Cosmic Blue ROS-HG 703', dark: true}, {hex: '#003555', file_no: '16', name: 'Crystal Blue ROS-HG 753', dark: false}],
      // tslint:disable-next-line:max-line-length
      hydrolock : [{hex: '#FAFAF8', file_no: '01', name: 'White ROS-HL 4000', dark: true}, {hex: '#EED0C6', file_no: '02', name: 'Pretty in Pink ROS-HL 4201', dark: true}, {hex: '#F3C6A5', file_no: '03', name: 'Fantasy ROS-HL 4303', dark: true}, {hex: '#FCCD8F', file_no: '04', name: 'Fresh Peach ROS-HL 4300', dark: true}, {hex: '#C1A987', file_no: '05', name: 'Classic Beige ROS-HL 4101', dark: true}, {hex: '#FEF091', file_no: '06', name: 'Canary Yellow ROS-HL 4500', dark: true}, {hex: '#CAE1CF', file_no: '07', name: 'Ice Age ROS-HL 4701', dark: true}, {hex: '#BCDDAE', file_no: '08', name: 'Jade ROS-HL 4901', dark: true}, {hex: '#74C2CE', file_no: '09', name: 'Blue Eyes ROS-HL 4700', dark: true}, {hex: '#9D9A93', file_no: '10', name: 'Slate Gray ROS-HL 4110', dark: true}],
      // tslint:disable-next-line:max-line-length
      roofmastic : [{hex: '#FFFFFF', file_no: '01', name: 'White ROS-RM 12000', dark: true}, {hex: '#B7A678', file_no: '02', name: 'Samar Beige ROS-RM 12183', dark: true}, {hex: '#C7784D', file_no: '03', name: 'Terracotta ROS-RM 12337', dark: true}, {hex: '#7E4921', file_no: '04', name: 'Tagaytay Brown ROS-RM 12600', dark: false}, {hex: '#663112', file_no: '05', name: 'Red ROS-RM 12222', dark: false}, {hex: '#4E2301', file_no: '06', name: 'Spanish Red ROS-RM 12233', dark: false}, {hex: '#3D1201', file_no: '07', name: 'Choco Brown ROS-RM 12603', dark: false}, {hex: '#CC191F', file_no: '08', name: 'Shanghai Red ROS-RM 12200', dark: false}, {hex: '#009261', file_no: '09', name: 'Crystal Green ROS-RM 12900', dark: false}, {hex: '#014327', file_no: '10', name: 'Baguio Green ROS-RM 12911', dark: false}, {hex: '#006ea1', file_no: '11', name: ' Crystal Blue ROS-RM 12733', dark: false}, {hex: '#014c83', file_no: '12', name: 'Azure Blue ROS-RM 12777', dark: false}],
      // tslint:disable-next-line:max-line-length
      sunroof : [{hex: '#F9F9F9', file_no: '01', name: 'White ROS-SR 100', dark: true}, {hex: '#D2E0CF', file_no: '02', name: 'Laguna White ROS-SR 180', dark: true}, {hex: '#009166', file_no: '03', name: 'Crystal Green ROS-SR 900', dark: false}, {hex: '#0176ac', file_no: '04', name: 'Crystal Blue ROS-SR 733', dark: false}, {hex: '#005c7e', file_no: '05', name: 'Navy Blue ROS-SR 700', dark: false}, {hex: '#005d90', file_no: '06', name: 'Azure Blue ROS-SR 777', dark: false}, {hex: '#481759', file_no: '07', name: 'Purple Heart ROS-SR 800', dark: false}, {hex: '#E1D4A0', file_no: '08', name: 'Creamy White ROS-SR 187', dark: true}, {hex: '#D8D1A5', file_no: '09', name: 'Samar Beige ROS-SR 183', dark: true}, {hex: '#C5BA8D', file_no: '10', name: 'Beige ROS-SR 182', dark: true}, {hex: '#C3B260', file_no: '11', name: 'Tuscan Beige ROS-SR 188', dark: true}, {hex: '#57762A', file_no: '12', name: 'Army Green ROS-SR 933', dark: false}, {hex: '#00471b', file_no: '13', name: 'Baguio Green ROS-SR 911', dark: false}, {hex: '#031603', file_no: '14', name: 'Wall Street ROS-SR 150', dark: false}, {hex: '#D87443', file_no: '15', name: 'Terra Cotta ROS-SR 337', dark: true}, {hex: '#E46437', file_no: '16', name: 'Rising Sun ROS-SR 300', dark: true}, {hex: '#9E4D22', file_no: '17', name: 'Wood Bridge ROS-SR 600', dark: false}, {hex: '#B84121', file_no: '18', name: 'Riviera Orange ROS-SR 333', dark: false}, {hex: '#ED302A', file_no: '19', name: 'Holiday Red ROS-SR 200', dark: false}, {hex: '#851511', file_no: '20', name: 'Crimson Red ROS-SR 222', dark: false}, {hex: '#5D0209', file_no: '21', name: 'Spanish Red ROS-SR 233', dark: false}, {hex: '#330007', file_no: '22', name: 'Choco Brown ROS-SR 603', dark: false}],
      // tslint:disable-next-line:max-line-length
      wallmastic : [{hex: '#FCEDE6', file_no: '01', name: 'Snow Flake ROS-WM 6101', dark: true}, {hex: '#FEF2D9', file_no: '02', name: 'White Sand ROS-WM 6103', dark: true}, {hex: '#F8EDCF', file_no: '03', name: 'Lion Heart ROS-WM 6102', dark: true}, {hex: '#E7CDB4', file_no: '04', name: 'Bamboo ROS-WM 6104', dark: true}, {hex: '#D8BA96', file_no: '05', name: 'Atlas Beige ROS-WM 6105', dark: true}, {hex: '#85633D', file_no: '06', name: 'Havana ROS-WM 6400', dark: false}, {hex: '#E4E7DC', file_no: '07', name: 'Tulle WHite ROS-WM 6100', dark: true}, {hex: '#EBE6EC', file_no: '08', name: 'Shy Violet ROS-WM 6800', dark: true}, {hex: '#C3E0DE', file_no: '09', name: 'Galaxy Blue ROS-WM 6701', dark: true}, {hex: '#8D9D9D', file_no: '10', name: 'Titanium ROS-WM 6110', dark: true}, {hex: '#85908A', file_no: '11', name: 'Steel Gray ROS-WM 6112', dark: true}, {hex: '#5A686B', file_no: '12', name: 'Carbon Fiber ROS-WM 6111', dark: false}, {hex: '#4073A8', file_no: '13', name: 'Blue Star ROS-WM 6700', dark: false}, {hex: '#FBDF00', file_no: '14', name: 'Yellow Ribbon ROS-WM 6500', dark: true}, {hex: '#F78F2C', file_no: '15', name: 'Majestic Orange ROS-WM 6300', dark: true}, {hex: '#BF2420', file_no: '16', name: 'Fireworks ROS-WM 6200', dark: false}, {hex: '#678046', file_no: '17', name: 'Evergreen ROS-WM 6900', dark: false}]
    };
  }

  initColorCollections(){
    this.colorCollections = [
      {
        title: 'Main Colors',
        src: 'assets/color-collections/Paint-Icons/Main Colors.png',
        colors: this.colors.main_colors,
        active: true
      },
      {
        title: 'Classic',
        src: 'assets/color-collections/Paint-Icons/Classic.png',
        colors: this.colors.classic,
        active: false
      },
      {
        title: 'Deck Seal',
        src: 'assets/color-collections/Paint-Icons/Deck Seal.png',
        colors: this.colors.deck_seal,
        active: false
      },
      {
        title: 'Dirt Shield',
        src: 'assets/color-collections/Paint-Icons/Dirt Shield.png',
        colors: this.colors.dirt_shield,
        active: false
      },
      {
        title: 'Elastofloor',
        src: 'assets/color-collections/Paint-Icons/Elastofloor.png',
        colors: this.colors.elastofloor,
        active: false
      },
      {
        title: 'Fresco',
        src: 'assets/color-collections/Paint-Icons/Fresco.png',
        colors: this.colors.fresco,
        active: false
      },
      {
        title: 'Hi-Gloss',
        src: 'assets/color-collections/Paint-Icons/Hi-Gloss.png',
        colors: this.colors.hi_gloss,
        active: false
      },
      {
        title: 'Hydrolock',
        src: 'assets/color-collections/Paint-Icons/Hydrolock.png',
        colors: this.colors.hydrolock,
        active: false
      },
      {
        title: 'Roofmastic',
        src: 'assets/color-collections/Paint-Icons/Roofmastic.png',
        colors: this.colors.roofmastic,
        active: false
      },
      {
        title: 'Sunroof',
        src: 'assets/color-collections/Paint-Icons/Sunroof.png',
        colors: this.colors.sunroof,
        active: false
      },
      {
        title: 'Wallmastic',
        src: 'assets/color-collections/Paint-Icons/Wallmastic.png',
        colors: this.colors.wallmastic,
        active: false
      }
    ];
  }

}
