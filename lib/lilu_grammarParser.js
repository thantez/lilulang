// Generated from grammar/lilu_grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var lilu_grammarListener = require('./lilu_grammarListener').lilu_grammarListener;
var grammarFileName = "lilu_grammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003G\u01c7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003M\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005V\n\u0005\f\u0005\u000e",
    "\u0005Y\u000b\u0005\u0003\u0006\u0003\u0006\u0005\u0006]\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006b\n\u0006\f\u0006\u000e\u0006",
    "e\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007j\n\u0007",
    "\u0003\b\u0005\bm\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bs\n\b\f",
    "\b\u000e\bv\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0007\t~\n\t\f\t\u000e\t\u0081\u000b\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\t\u0088\n\t\f\t\u000e\t\u008b\u000b\t\u0007\t\u008d",
    "\n\t\f\t\u000e\t\u0090\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u0096\n\n\f\n\u000e\n\u0099\u000b\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0007\n\u00a2\n\n\f\n\u000e\n\u00a5\u000b",
    "\n\u0003\n\u0003\n\u0007\n\u00a9\n\n\f\n\u000e\n\u00ac\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b3",
    "\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u00b9\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0006\r\u00c6\n\r\r\r\u000e",
    "\r\u00c7\u0003\r\u0003\r\u0003\u000e\u0005\u000e\u00cd\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00d6\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00df\n",
    "\u0010\f\u0010\u000e\u0010\u00e2\u000b\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e9\n\u0010\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00ed\n\u0011\u0003\u0011\u0005\u0011",
    "\u00f0\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00f6\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00fe\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u0104\n\u0012\f\u0012\u000e",
    "\u0012\u0107\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0007\u0013\u010e\n\u0013\f\u0013\u000e\u0013\u0111\u000b",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0116\n\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u011d\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u012a\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0007\u0016\u013d\n\u0016\f\u0016\u000e\u0016",
    "\u0140\u000b\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0144\n\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0149\n\u0017\f\u0017",
    "\u000e\u0017\u014c\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0155\n\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0172\n\u0018\f\u0018",
    "\u000e\u0018\u0175\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0005\u0019\u0182\n\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0189\n\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u018f\n\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0005\u001c\u0197\n\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u019b",
    "\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d",
    "\u01a1\n\u001d\u0003\u001d\u0003\u001d\u0006\u001d\u01a5\n\u001d\r\u001d",
    "\u000e\u001d\u01a6\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u01ad\n\u001e\u0003\u001f\u0006\u001f\u01b0\n\u001f\r\u001f\u000e",
    "\u001f\u01b1\u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0006!\u01bd\n!\r!\u000e!\u01be\u0003!\u0003!\u0005!\u01c3",
    "\n!\u0003\"\u0003\"\u0003\"\u0002\u0005\u0010\u0012.#\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@B\u0002\u000b\u0007\u0002\t\t\u0012\u0012\u0015\u0015\u001d",
    "\u001dCC\u0004\u0002\u001e\u001e  \u0004\u0002&&((\u0004\u0002=>BB\u0003",
    "\u0002;<\u0003\u0002\u0004\u0005\u0003\u000258\u0003\u0002\u0018\u001a",
    "\u0004\u0002\u0006\u0007<<\u0002\u01ed\u0002D\u0003\u0002\u0002\u0002",
    "\u0004L\u0003\u0002\u0002\u0002\u0006N\u0003\u0002\u0002\u0002\bP\u0003",
    "\u0002\u0002\u0002\n\\\u0003\u0002\u0002\u0002\ff\u0003\u0002\u0002",
    "\u0002\u000el\u0003\u0002\u0002\u0002\u0010y\u0003\u0002\u0002\u0002",
    "\u0012\u0091\u0003\u0002\u0002\u0002\u0014\u00b2\u0003\u0002\u0002\u0002",
    "\u0016\u00bd\u0003\u0002\u0002\u0002\u0018\u00c0\u0003\u0002\u0002\u0002",
    "\u001a\u00cc\u0003\u0002\u0002\u0002\u001c\u00ce\u0003\u0002\u0002\u0002",
    "\u001e\u00e8\u0003\u0002\u0002\u0002 \u00fd\u0003\u0002\u0002\u0002",
    "\"\u00ff\u0003\u0002\u0002\u0002$\u010a\u0003\u0002\u0002\u0002&\u0112",
    "\u0003\u0002\u0002\u0002(\u0129\u0003\u0002\u0002\u0002*\u0143\u0003",
    "\u0002\u0002\u0002,\u0145\u0003\u0002\u0002\u0002.\u0154\u0003\u0002",
    "\u0002\u00020\u0181\u0003\u0002\u0002\u00022\u0188\u0003\u0002\u0002",
    "\u00024\u0193\u0003\u0002\u0002\u00026\u0196\u0003\u0002\u0002\u0002",
    "8\u019c\u0003\u0002\u0002\u0002:\u01ac\u0003\u0002\u0002\u0002<\u01af",
    "\u0003\u0002\u0002\u0002>\u01b3\u0003\u0002\u0002\u0002@\u01c2\u0003",
    "\u0002\u0002\u0002B\u01c4\u0003\u0002\u0002\u0002DE\u0005\u001a\u000e",
    "\u0002EF\u0005<\u001f\u0002F\u0003\u0003\u0002\u0002\u0002GM\u0007(",
    "\u0002\u0002HM\u0007&\u0002\u0002IM\u0007%\u0002\u0002JM\u0007)\u0002",
    "\u0002KM\u0007*\u0002\u0002LG\u0003\u0002\u0002\u0002LH\u0003\u0002",
    "\u0002\u0002LI\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LK\u0003",
    "\u0002\u0002\u0002M\u0005\u0003\u0002\u0002\u0002NO\t\u0002\u0002\u0002",
    "O\u0007\u0003\u0002\u0002\u0002PW\u0007C\u0002\u0002QR\u0007/\u0002",
    "\u0002RS\u0005.\u0018\u0002ST\u00070\u0002\u0002TV\u0003\u0002\u0002",
    "\u0002UQ\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WU\u0003\u0002",
    "\u0002\u0002WX\u0003\u0002\u0002\u0002X\t\u0003\u0002\u0002\u0002YW",
    "\u0003\u0002\u0002\u0002Z[\t\u0003\u0002\u0002[]\u00073\u0002\u0002",
    "\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0003\u0002",
    "\u0002\u0002^c\u0005\b\u0005\u0002_`\u00073\u0002\u0002`b\u0005\b\u0005",
    "\u0002a_\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002d\u000b\u0003\u0002\u0002\u0002",
    "ec\u0003\u0002\u0002\u0002fi\u0005\b\u0005\u0002gh\u0007\u0003\u0002",
    "\u0002hj\u0005.\u0018\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002",
    "\u0002\u0002j\r\u0003\u0002\u0002\u0002km\u0007\f\u0002\u0002lk\u0003",
    "\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "no\u0005\u0006\u0004\u0002ot\u0005\f\u0007\u0002pq\u00072\u0002\u0002",
    "qs\u0005\f\u0007\u0002rp\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002",
    "\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uw\u0003\u0002",
    "\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u00071\u0002\u0002x\u000f\u0003",
    "\u0002\u0002\u0002yz\b\t\u0001\u0002z\u007f\u0005\u0006\u0004\u0002",
    "{|\u0007/\u0002\u0002|~\u00070\u0002\u0002}{\u0003\u0002\u0002\u0002",
    "~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f",
    "\u0080\u0003\u0002\u0002\u0002\u0080\u008e\u0003\u0002\u0002\u0002\u0081",
    "\u007f\u0003\u0002\u0002\u0002\u0082\u0083\f\u0003\u0002\u0002\u0083",
    "\u0084\u00072\u0002\u0002\u0084\u0089\u0005\u0006\u0004\u0002\u0085",
    "\u0086\u0007/\u0002\u0002\u0086\u0088\u00070\u0002\u0002\u0087\u0085",
    "\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u0087",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008d",
    "\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u0082",
    "\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002\u0002\u0002\u008e\u008c",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0011",
    "\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0092",
    "\b\n\u0001\u0002\u0092\u0097\u0005\u0006\u0004\u0002\u0093\u0094\u0007",
    "/\u0002\u0002\u0094\u0096\u00070\u0002\u0002\u0095\u0093\u0003\u0002",
    "\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002",
    "\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009a\u0003\u0002",
    "\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009b\u0007C",
    "\u0002\u0002\u009b\u00aa\u0003\u0002\u0002\u0002\u009c\u009d\f\u0003",
    "\u0002\u0002\u009d\u009e\u00072\u0002\u0002\u009e\u00a3\u0005\u0006",
    "\u0004\u0002\u009f\u00a0\u0007/\u0002\u0002\u00a0\u00a2\u00070\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002",
    "\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4\u00a6\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0007C\u0002\u0002\u00a7\u00a9\u0003\u0002\u0002",
    "\u0002\u00a8\u009c\u0003\u0002\u0002\u0002\u00a9\u00ac\u0003\u0002\u0002",
    "\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002",
    "\u0002\u00ab\u0013\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0007+\u0002\u0002\u00ae\u00af\u0005\u0010\t\u0002",
    "\u00af\u00b0\u0007,\u0002\u0002\u00b0\u00b1\u0007\u0003\u0002\u0002",
    "\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00ad\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0007C\u0002\u0002\u00b5\u00b8\u0007+\u0002\u0002\u00b6",
    "\u00b9\u0005\u0010\t\u0002\u00b7\u00b9\u0005\u0012\n\u0002\u00b8\u00b6",
    "\u0003\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb",
    "\u0007,\u0002\u0002\u00bb\u00bc\u00071\u0002\u0002\u00bc\u0015\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0007C\u0002\u0002\u00be\u00bf\u0007",
    "1\u0002\u0002\u00bf\u0017\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007",
    "\u000e\u0002\u0002\u00c1\u00c5\u0007-\u0002\u0002\u00c2\u00c6\u0005",
    "\u0014\u000b\u0002\u00c3\u00c6\u0005\u0016\f\u0002\u00c4\u00c6\u0005",
    "\u000e\b\u0002\u00c5\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003",
    "\u0002\u0002\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003",
    "\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007",
    ".\u0002\u0002\u00ca\u0019\u0003\u0002\u0002\u0002\u00cb\u00cd\u0005",
    "\u0018\r\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003",
    "\u0002\u0002\u0002\u00cd\u001b\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007",
    "\u0011\u0002\u0002\u00cf\u00d0\u0005,\u0017\u0002\u00d0\u001d\u0003",
    "\u0002\u0002\u0002\u00d1\u00d2\u0007\u0014\u0002\u0002\u00d2\u00d3\u0005",
    ".\u0018\u0002\u00d3\u00d5\u0005,\u0017\u0002\u00d4\u00d6\u0005\u001c",
    "\u000f\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002",
    "\u0002\u0002\u00d6\u00e9\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007\u001f",
    "\u0002\u0002\u00d8\u00d9\u0005\n\u0006\u0002\u00d9\u00e0\u0007-\u0002",
    "\u0002\u00da\u00db\u0007\u000b\u0002\u0002\u00db\u00dc\t\u0004\u0002",
    "\u0002\u00dc\u00dd\u00074\u0002\u0002\u00dd\u00df\u0005,\u0017\u0002",
    "\u00de\u00da\u0003\u0002\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002",
    "\u00e0\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002",
    "\u00e1\u00e3\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0007\u000f\u0002\u0002\u00e4\u00e5\u00074\u0002\u0002",
    "\u00e5\u00e6\u0005,\u0017\u0002\u00e6\u00e7\u0007.\u0002\u0002\u00e7",
    "\u00e9\u0003\u0002\u0002\u0002\u00e8\u00d1\u0003\u0002\u0002\u0002\u00e8",
    "\u00d7\u0003\u0002\u0002\u0002\u00e9\u001f\u0003\u0002\u0002\u0002\u00ea",
    "\u00ef\u0007\u0013\u0002\u0002\u00eb\u00ed\u0005\u0006\u0004\u0002\u00ec",
    "\u00eb\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed",
    "\u00ee\u0003\u0002\u0002\u0002\u00ee\u00f0\u0005> \u0002\u00ef\u00ec",
    "\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f1",
    "\u0003\u0002\u0002\u0002\u00f1\u00f2\u00071\u0002\u0002\u00f2\u00f3",
    "\u0005.\u0018\u0002\u00f3\u00f5\u00071\u0002\u0002\u00f4\u00f6\u0005",
    "> \u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0005,",
    "\u0017\u0002\u00f8\u00fe\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\"",
    "\u0002\u0002\u00fa\u00fb\u0005.\u0018\u0002\u00fb\u00fc\u0005,\u0017",
    "\u0002\u00fc\u00fe\u0003\u0002\u0002\u0002\u00fd\u00ea\u0003\u0002\u0002",
    "\u0002\u00fd\u00f9\u0003\u0002\u0002\u0002\u00fe!\u0003\u0002\u0002",
    "\u0002\u00ff\u0100\u0007/\u0002\u0002\u0100\u0105\u0005.\u0018\u0002",
    "\u0101\u0102\u00072\u0002\u0002\u0102\u0104\u0005.\u0018\u0002\u0103",
    "\u0101\u0003\u0002\u0002\u0002\u0104\u0107\u0003\u0002\u0002\u0002\u0105",
    "\u0103\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106",
    "\u0108\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u00070\u0002\u0002\u0109#\u0003\u0002\u0002\u0002\u010a\u010f",
    "\u0005.\u0018\u0002\u010b\u010c\u00072\u0002\u0002\u010c\u010e\u0005",
    ".\u0018\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010e\u0111\u0003",
    "\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u010f\u0110\u0003",
    "\u0002\u0002\u0002\u0110%\u0003\u0002\u0002\u0002\u0111\u010f\u0003",
    "\u0002\u0002\u0002\u0112\u0113\u0007C\u0002\u0002\u0113\u0115\u0007",
    "+\u0002\u0002\u0114\u0116\u0005$\u0013\u0002\u0115\u0114\u0003\u0002",
    "\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002",
    "\u0002\u0002\u0117\u0118\u0007,\u0002\u0002\u0118\'\u0003\u0002\u0002",
    "\u0002\u0119\u011a\u0005\n\u0006\u0002\u011a\u011b\u00073\u0002\u0002",
    "\u011b\u011d\u0003\u0002\u0002\u0002\u011c\u0119\u0003\u0002\u0002\u0002",
    "\u011c\u011d\u0003\u0002\u0002\u0002\u011d\u011e\u0003\u0002\u0002\u0002",
    "\u011e\u012a\u0005&\u0014\u0002\u011f\u0120\u0007\u001b\u0002\u0002",
    "\u0120\u0121\u0007+\u0002\u0002\u0121\u0122\u0005\n\u0006\u0002\u0122",
    "\u0123\u0007,\u0002\u0002\u0123\u012a\u0003\u0002\u0002\u0002\u0124",
    "\u0125\u0007#\u0002\u0002\u0125\u0126\u0007+\u0002\u0002\u0126\u0127",
    "\u0005\n\u0006\u0002\u0127\u0128\u0007,\u0002\u0002\u0128\u012a\u0003",
    "\u0002\u0002\u0002\u0129\u011c\u0003\u0002\u0002\u0002\u0129\u011f\u0003",
    "\u0002\u0002\u0002\u0129\u0124\u0003\u0002\u0002\u0002\u012a)\u0003",
    "\u0002\u0002\u0002\u012b\u012c\u0005> \u0002\u012c\u012d\u00071\u0002",
    "\u0002\u012d\u0144\u0003\u0002\u0002\u0002\u012e\u012f\u0005(\u0015",
    "\u0002\u012f\u0130\u00071\u0002\u0002\u0130\u0144\u0003\u0002\u0002",
    "\u0002\u0131\u0144\u0005\u001e\u0010\u0002\u0132\u0144\u0005 \u0011",
    "\u0002\u0133\u0134\u0007\u001c\u0002\u0002\u0134\u0144\u00071\u0002",
    "\u0002\u0135\u0136\u0007\n\u0002\u0002\u0136\u0144\u00071\u0002\u0002",
    "\u0137\u0138\u0007\r\u0002\u0002\u0138\u0144\u00071\u0002\u0002\u0139",
    "\u013e\u0007\u0010\u0002\u0002\u013a\u013b\u0007/\u0002\u0002\u013b",
    "\u013d\u00070\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013d",
    "\u0140\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013e",
    "\u013f\u0003\u0002\u0002\u0002\u013f\u0141\u0003\u0002\u0002\u0002\u0140",
    "\u013e\u0003\u0002\u0002\u0002\u0141\u0142\u0007C\u0002\u0002\u0142",
    "\u0144\u00071\u0002\u0002\u0143\u012b\u0003\u0002\u0002\u0002\u0143",
    "\u012e\u0003\u0002\u0002\u0002\u0143\u0131\u0003\u0002\u0002\u0002\u0143",
    "\u0132\u0003\u0002\u0002\u0002\u0143\u0133\u0003\u0002\u0002\u0002\u0143",
    "\u0135\u0003\u0002\u0002\u0002\u0143\u0137\u0003\u0002\u0002\u0002\u0143",
    "\u0139\u0003\u0002\u0002\u0002\u0144+\u0003\u0002\u0002\u0002\u0145",
    "\u014a\u0007-\u0002\u0002\u0146\u0149\u0005\u000e\b\u0002\u0147\u0149",
    "\u0005*\u0016\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0148\u0147",
    "\u0003\u0002\u0002\u0002\u0149\u014c\u0003\u0002\u0002\u0002\u014a\u0148",
    "\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b\u014d",
    "\u0003\u0002\u0002\u0002\u014c\u014a\u0003\u0002\u0002\u0002\u014d\u014e",
    "\u0007.\u0002\u0002\u014e-\u0003\u0002\u0002\u0002\u014f\u0150\b\u0018",
    "\u0001\u0002\u0150\u0151\u0005B\"\u0002\u0151\u0152\u0005.\u0018\r\u0152",
    "\u0155\u0003\u0002\u0002\u0002\u0153\u0155\u00050\u0019\u0002\u0154",
    "\u014f\u0003\u0002\u0002\u0002\u0154\u0153\u0003\u0002\u0002\u0002\u0155",
    "\u0173\u0003\u0002\u0002\u0002\u0156\u0157\f\f\u0002\u0002\u0157\u0158",
    "\t\u0005\u0002\u0002\u0158\u0172\u0005.\u0018\r\u0159\u015a\f\u000b",
    "\u0002\u0002\u015a\u015b\t\u0006\u0002\u0002\u015b\u0172\u0005.\u0018",
    "\f\u015c\u015d\f\n\u0002\u0002\u015d\u015e\t\u0007\u0002\u0002\u015e",
    "\u0172\u0005.\u0018\u000b\u015f\u0160\f\t\u0002\u0002\u0160\u0161\t",
    "\b\u0002\u0002\u0161\u0172\u0005.\u0018\n\u0162\u0163\f\b\u0002\u0002",
    "\u0163\u0164\u0007?\u0002\u0002\u0164\u0172\u0005.\u0018\t\u0165\u0166",
    "\f\u0007\u0002\u0002\u0166\u0167\u0007A\u0002\u0002\u0167\u0172\u0005",
    ".\u0018\b\u0168\u0169\f\u0006\u0002\u0002\u0169\u016a\u0007@\u0002\u0002",
    "\u016a\u0172\u0005.\u0018\u0007\u016b\u016c\f\u0005\u0002\u0002\u016c",
    "\u016d\u00079\u0002\u0002\u016d\u0172\u0005.\u0018\u0006\u016e\u016f",
    "\f\u0004\u0002\u0002\u016f\u0170\u0007:\u0002\u0002\u0170\u0172\u0005",
    ".\u0018\u0005\u0171\u0156\u0003\u0002\u0002\u0002\u0171\u0159\u0003",
    "\u0002\u0002\u0002\u0171\u015c\u0003\u0002\u0002\u0002\u0171\u015f\u0003",
    "\u0002\u0002\u0002\u0171\u0162\u0003\u0002\u0002\u0002\u0171\u0165\u0003",
    "\u0002\u0002\u0002\u0171\u0168\u0003\u0002\u0002\u0002\u0171\u016b\u0003",
    "\u0002\u0002\u0002\u0171\u016e\u0003\u0002\u0002\u0002\u0172\u0175\u0003",
    "\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0174\u0003",
    "\u0002\u0002\u0002\u0174/\u0003\u0002\u0002\u0002\u0175\u0173\u0003",
    "\u0002\u0002\u0002\u0176\u0177\u0007+\u0002\u0002\u0177\u0178\u0005",
    ".\u0018\u0002\u0178\u0179\u0007,\u0002\u0002\u0179\u0182\u0003\u0002",
    "\u0002\u0002\u017a\u0182\u0005\u0004\u0003\u0002\u017b\u017c\u0007\b",
    "\u0002\u0002\u017c\u0182\u0005&\u0014\u0002\u017d\u0182\u0005(\u0015",
    "\u0002\u017e\u0182\u0005\n\u0006\u0002\u017f\u0182\u0005\"\u0012\u0002",
    "\u0180\u0182\u0007\u0016\u0002\u0002\u0181\u0176\u0003\u0002\u0002\u0002",
    "\u0181\u017a\u0003\u0002\u0002\u0002\u0181\u017b\u0003\u0002\u0002\u0002",
    "\u0181\u017d\u0003\u0002\u0002\u0002\u0181\u017e\u0003\u0002\u0002\u0002",
    "\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0180\u0003\u0002\u0002\u0002",
    "\u01821\u0003\u0002\u0002\u0002\u0183\u0184\u0007+\u0002\u0002\u0184",
    "\u0185\u0005\u0012\n\u0002\u0185\u0186\u0007,\u0002\u0002\u0186\u0187",
    "\u0007\u0003\u0002\u0002\u0187\u0189\u0003\u0002\u0002\u0002\u0188\u0183",
    "\u0003\u0002\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018a",
    "\u0003\u0002\u0002\u0002\u018a\u018b\u0007$\u0002\u0002\u018b\u018c",
    "\u0007C\u0002\u0002\u018c\u018e\u0007+\u0002\u0002\u018d\u018f\u0005",
    "\u0012\n\u0002\u018e\u018d\u0003\u0002\u0002\u0002\u018e\u018f\u0003",
    "\u0002\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190\u0191\u0007",
    ",\u0002\u0002\u0191\u0192\u0005,\u0017\u0002\u01923\u0003\u0002\u0002",
    "\u0002\u0193\u0194\t\t\u0002\u0002\u01945\u0003\u0002\u0002\u0002\u0195",
    "\u0197\u00054\u001b\u0002\u0196\u0195\u0003\u0002\u0002\u0002\u0196",
    "\u0197\u0003\u0002\u0002\u0002\u0197\u019a\u0003\u0002\u0002\u0002\u0198",
    "\u019b\u0005\u000e\b\u0002\u0199\u019b\u00052\u001a\u0002\u019a\u0198",
    "\u0003\u0002\u0002\u0002\u019a\u0199\u0003\u0002\u0002\u0002\u019b7",
    "\u0003\u0002\u0002\u0002\u019c\u019d\u0007!\u0002\u0002\u019d\u01a0",
    "\u0007C\u0002\u0002\u019e\u019f\u00074\u0002\u0002\u019f\u01a1\u0007",
    "C\u0002\u0002\u01a0\u019e\u0003\u0002\u0002\u0002\u01a0\u01a1\u0003",
    "\u0002\u0002\u0002\u01a1\u01a2\u0003\u0002\u0002\u0002\u01a2\u01a4\u0007",
    "-\u0002\u0002\u01a3\u01a5\u00056\u001c\u0002\u01a4\u01a3\u0003\u0002",
    "\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a4\u0003\u0002",
    "\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002",
    "\u0002\u0002\u01a8\u01a9\u0007.\u0002\u0002\u01a99\u0003\u0002\u0002",
    "\u0002\u01aa\u01ad\u00058\u001d\u0002\u01ab\u01ad\u00052\u001a\u0002",
    "\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ac\u01ab\u0003\u0002\u0002\u0002",
    "\u01ad;\u0003\u0002\u0002\u0002\u01ae\u01b0\u0005:\u001e\u0002\u01af",
    "\u01ae\u0003\u0002\u0002\u0002\u01b0\u01b1\u0003\u0002\u0002\u0002\u01b1",
    "\u01af\u0003\u0002\u0002\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2",
    "=\u0003\u0002\u0002\u0002\u01b3\u01b4\u0005@!\u0002\u01b4\u01b5\u0007",
    "\u0003\u0002\u0002\u01b5\u01b6\u0005.\u0018\u0002\u01b6?\u0003\u0002",
    "\u0002\u0002\u01b7\u01c3\u0005\n\u0006\u0002\u01b8\u01b9\u0007+\u0002",
    "\u0002\u01b9\u01bc\u0005\n\u0006\u0002\u01ba\u01bb\u00072\u0002\u0002",
    "\u01bb\u01bd\u0005\n\u0006\u0002\u01bc\u01ba\u0003\u0002\u0002\u0002",
    "\u01bd\u01be\u0003\u0002\u0002\u0002\u01be\u01bc\u0003\u0002\u0002\u0002",
    "\u01be\u01bf\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002",
    "\u01c0\u01c1\u0007,\u0002\u0002\u01c1\u01c3\u0003\u0002\u0002\u0002",
    "\u01c2\u01b7\u0003\u0002\u0002\u0002\u01c2\u01b8\u0003\u0002\u0002\u0002",
    "\u01c3A\u0003\u0002\u0002\u0002\u01c4\u01c5\t\n\u0002\u0002\u01c5C\u0003",
    "\u0002\u0002\u00022LW\\cilt\u007f\u0089\u008e\u0097\u00a3\u00aa\u00b2",
    "\u00b8\u00c5\u00c7\u00cc\u00d5\u00e0\u00e8\u00ec\u00ef\u00f5\u00fd\u0105",
    "\u010f\u0115\u011c\u0129\u013e\u0143\u0148\u014a\u0154\u0171\u0173\u0181",
    "\u0188\u018e\u0196\u019a\u01a0\u01a6\u01ac\u01b1\u01be\u01c2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'>'", "'<'", "'!'", "'~'", "'allocate'", 
                     "'bool'", "'break'", "'case'", "'const'", "'continue'", 
                     "'declare'", "'default'", "'destruct'", "'else'", "'float'", 
                     "'for'", "'if'", "'int'", "'nil'", "'of'", "'private'", 
                     "'protected'", "'public'", "'read'", "'return'", "'string'", 
                     "'super'", "'switch'", "'this'", "'type'", "'while'", 
                     "'write'", "'function'", null, null, null, null, null, 
                     null, "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
                     "','", "'.'", "':'", "'=='", "'<='", "'>='", "'!='", 
                     "'&&'", "'||'", "'+'", "'-'", "'*'", "'/'", "'&'", 
                     "'|'", "'^'", "'%'" ];

var symbolicNames = [ null, "ASSIGN", "GT", "LT", "BANG", "TILDE", "ALLOCATE", 
                      "BOOL", "BREAK", "CASE", "CONST", "CONTINUE", "DECLARE", 
                      "DEFAULT", "DESTRUCT", "ELSE", "FLOAT", "FOR", "IF", 
                      "INT", "NIL", "OF", "PRIVATE", "PROTECTED", "PUBLIC", 
                      "READ", "RETURN", "STRING", "SUPER", "SWITCH", "THIS", 
                      "TYPE", "WHILE", "WRITE", "FUNCTION", "REAL_CONST", 
                      "HEX_CONST", "HEX_STR", "INT_CONST", "BOOL_CONST", 
                      "STRING_CONST", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                      "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "COLON", 
                      "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "ADD", 
                      "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", 
                      "ID", "WHITESPACE", "NEWLINE", "BLOCKCOMMENT", "LINECOMMENT" ];

var ruleNames =  [ "program", "const_val", "type", "ref", "variable", "variable_val", 
                   "variable_def", "args", "args_variable", "func_dcl", 
                   "type_dcl", "ft_dcl", "dcl", "else_stmt", "cond_stmt", 
                   "loop_stmt", "list", "params", "handle_call", "func_call", 
                   "stmt", "block", "expr", "parans", "fun_def", "access_modifier", 
                   "component", "type_def", "ft_def", "def", "assign", "leftAssign", 
                   "unary_op" ];

function lilu_grammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

lilu_grammarParser.prototype = Object.create(antlr4.Parser.prototype);
lilu_grammarParser.prototype.constructor = lilu_grammarParser;

Object.defineProperty(lilu_grammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

lilu_grammarParser.EOF = antlr4.Token.EOF;
lilu_grammarParser.ASSIGN = 1;
lilu_grammarParser.GT = 2;
lilu_grammarParser.LT = 3;
lilu_grammarParser.BANG = 4;
lilu_grammarParser.TILDE = 5;
lilu_grammarParser.ALLOCATE = 6;
lilu_grammarParser.BOOL = 7;
lilu_grammarParser.BREAK = 8;
lilu_grammarParser.CASE = 9;
lilu_grammarParser.CONST = 10;
lilu_grammarParser.CONTINUE = 11;
lilu_grammarParser.DECLARE = 12;
lilu_grammarParser.DEFAULT = 13;
lilu_grammarParser.DESTRUCT = 14;
lilu_grammarParser.ELSE = 15;
lilu_grammarParser.FLOAT = 16;
lilu_grammarParser.FOR = 17;
lilu_grammarParser.IF = 18;
lilu_grammarParser.INT = 19;
lilu_grammarParser.NIL = 20;
lilu_grammarParser.OF = 21;
lilu_grammarParser.PRIVATE = 22;
lilu_grammarParser.PROTECTED = 23;
lilu_grammarParser.PUBLIC = 24;
lilu_grammarParser.READ = 25;
lilu_grammarParser.RETURN = 26;
lilu_grammarParser.STRING = 27;
lilu_grammarParser.SUPER = 28;
lilu_grammarParser.SWITCH = 29;
lilu_grammarParser.THIS = 30;
lilu_grammarParser.TYPE = 31;
lilu_grammarParser.WHILE = 32;
lilu_grammarParser.WRITE = 33;
lilu_grammarParser.FUNCTION = 34;
lilu_grammarParser.REAL_CONST = 35;
lilu_grammarParser.HEX_CONST = 36;
lilu_grammarParser.HEX_STR = 37;
lilu_grammarParser.INT_CONST = 38;
lilu_grammarParser.BOOL_CONST = 39;
lilu_grammarParser.STRING_CONST = 40;
lilu_grammarParser.LPAREN = 41;
lilu_grammarParser.RPAREN = 42;
lilu_grammarParser.LBRACE = 43;
lilu_grammarParser.RBRACE = 44;
lilu_grammarParser.LBRACK = 45;
lilu_grammarParser.RBRACK = 46;
lilu_grammarParser.SEMI = 47;
lilu_grammarParser.COMMA = 48;
lilu_grammarParser.DOT = 49;
lilu_grammarParser.COLON = 50;
lilu_grammarParser.EQUAL = 51;
lilu_grammarParser.LE = 52;
lilu_grammarParser.GE = 53;
lilu_grammarParser.NOTEQUAL = 54;
lilu_grammarParser.AND = 55;
lilu_grammarParser.OR = 56;
lilu_grammarParser.ADD = 57;
lilu_grammarParser.SUB = 58;
lilu_grammarParser.MUL = 59;
lilu_grammarParser.DIV = 60;
lilu_grammarParser.BITAND = 61;
lilu_grammarParser.BITOR = 62;
lilu_grammarParser.CARET = 63;
lilu_grammarParser.MOD = 64;
lilu_grammarParser.ID = 65;
lilu_grammarParser.WHITESPACE = 66;
lilu_grammarParser.NEWLINE = 67;
lilu_grammarParser.BLOCKCOMMENT = 68;
lilu_grammarParser.LINECOMMENT = 69;

lilu_grammarParser.RULE_program = 0;
lilu_grammarParser.RULE_const_val = 1;
lilu_grammarParser.RULE_type = 2;
lilu_grammarParser.RULE_ref = 3;
lilu_grammarParser.RULE_variable = 4;
lilu_grammarParser.RULE_variable_val = 5;
lilu_grammarParser.RULE_variable_def = 6;
lilu_grammarParser.RULE_args = 7;
lilu_grammarParser.RULE_args_variable = 8;
lilu_grammarParser.RULE_func_dcl = 9;
lilu_grammarParser.RULE_type_dcl = 10;
lilu_grammarParser.RULE_ft_dcl = 11;
lilu_grammarParser.RULE_dcl = 12;
lilu_grammarParser.RULE_else_stmt = 13;
lilu_grammarParser.RULE_cond_stmt = 14;
lilu_grammarParser.RULE_loop_stmt = 15;
lilu_grammarParser.RULE_list = 16;
lilu_grammarParser.RULE_params = 17;
lilu_grammarParser.RULE_handle_call = 18;
lilu_grammarParser.RULE_func_call = 19;
lilu_grammarParser.RULE_stmt = 20;
lilu_grammarParser.RULE_block = 21;
lilu_grammarParser.RULE_expr = 22;
lilu_grammarParser.RULE_parans = 23;
lilu_grammarParser.RULE_fun_def = 24;
lilu_grammarParser.RULE_access_modifier = 25;
lilu_grammarParser.RULE_component = 26;
lilu_grammarParser.RULE_type_def = 27;
lilu_grammarParser.RULE_ft_def = 28;
lilu_grammarParser.RULE_def = 29;
lilu_grammarParser.RULE_assign = 30;
lilu_grammarParser.RULE_leftAssign = 31;
lilu_grammarParser.RULE_unary_op = 32;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.dcl = function() {
    return this.getTypedRuleContext(DclContext,0);
};

ProgramContext.prototype.def = function() {
    return this.getTypedRuleContext(DefContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitProgram(this);
	}
};




lilu_grammarParser.ProgramContext = ProgramContext;

lilu_grammarParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, lilu_grammarParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.dcl();
        this.state = 67;
        this.def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Const_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_const_val;
    return this;
}

Const_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_valContext.prototype.constructor = Const_valContext;


 
Const_valContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Const_valHEXContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valHEXContext.prototype = Object.create(Const_valContext.prototype);
Const_valHEXContext.prototype.constructor = Const_valHEXContext;

lilu_grammarParser.Const_valHEXContext = Const_valHEXContext;

Const_valHEXContext.prototype.HEX_CONST = function() {
    return this.getToken(lilu_grammarParser.HEX_CONST, 0);
};
Const_valHEXContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valHEX(this);
	}
};

Const_valHEXContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valHEX(this);
	}
};


function Const_valSTRINGContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valSTRINGContext.prototype = Object.create(Const_valContext.prototype);
Const_valSTRINGContext.prototype.constructor = Const_valSTRINGContext;

lilu_grammarParser.Const_valSTRINGContext = Const_valSTRINGContext;

Const_valSTRINGContext.prototype.STRING_CONST = function() {
    return this.getToken(lilu_grammarParser.STRING_CONST, 0);
};
Const_valSTRINGContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valSTRING(this);
	}
};

Const_valSTRINGContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valSTRING(this);
	}
};


function Const_valBOOLContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valBOOLContext.prototype = Object.create(Const_valContext.prototype);
Const_valBOOLContext.prototype.constructor = Const_valBOOLContext;

lilu_grammarParser.Const_valBOOLContext = Const_valBOOLContext;

Const_valBOOLContext.prototype.BOOL_CONST = function() {
    return this.getToken(lilu_grammarParser.BOOL_CONST, 0);
};
Const_valBOOLContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valBOOL(this);
	}
};

Const_valBOOLContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valBOOL(this);
	}
};


function Const_valREALContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valREALContext.prototype = Object.create(Const_valContext.prototype);
Const_valREALContext.prototype.constructor = Const_valREALContext;

lilu_grammarParser.Const_valREALContext = Const_valREALContext;

Const_valREALContext.prototype.REAL_CONST = function() {
    return this.getToken(lilu_grammarParser.REAL_CONST, 0);
};
Const_valREALContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valREAL(this);
	}
};

Const_valREALContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valREAL(this);
	}
};


function Const_valINTContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valINTContext.prototype = Object.create(Const_valContext.prototype);
Const_valINTContext.prototype.constructor = Const_valINTContext;

lilu_grammarParser.Const_valINTContext = Const_valINTContext;

Const_valINTContext.prototype.INT_CONST = function() {
    return this.getToken(lilu_grammarParser.INT_CONST, 0);
};
Const_valINTContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valINT(this);
	}
};

Const_valINTContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valINT(this);
	}
};



lilu_grammarParser.Const_valContext = Const_valContext;

lilu_grammarParser.prototype.const_val = function() {

    var localctx = new Const_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, lilu_grammarParser.RULE_const_val);
    try {
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.INT_CONST:
            localctx = new Const_valINTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 69;
            this.match(lilu_grammarParser.INT_CONST);
            break;
        case lilu_grammarParser.HEX_CONST:
            localctx = new Const_valHEXContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.match(lilu_grammarParser.HEX_CONST);
            break;
        case lilu_grammarParser.REAL_CONST:
            localctx = new Const_valREALContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 71;
            this.match(lilu_grammarParser.REAL_CONST);
            break;
        case lilu_grammarParser.BOOL_CONST:
            localctx = new Const_valBOOLContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 72;
            this.match(lilu_grammarParser.BOOL_CONST);
            break;
        case lilu_grammarParser.STRING_CONST:
            localctx = new Const_valSTRINGContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 73;
            this.match(lilu_grammarParser.STRING_CONST);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.INT = function() {
    return this.getToken(lilu_grammarParser.INT, 0);
};

TypeContext.prototype.BOOL = function() {
    return this.getToken(lilu_grammarParser.BOOL, 0);
};

TypeContext.prototype.FLOAT = function() {
    return this.getToken(lilu_grammarParser.FLOAT, 0);
};

TypeContext.prototype.STRING = function() {
    return this.getToken(lilu_grammarParser.STRING, 0);
};

TypeContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType(this);
	}
};




lilu_grammarParser.TypeContext = TypeContext;

lilu_grammarParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, lilu_grammarParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

RefContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


RefContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RefContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};


RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitRef(this);
	}
};




lilu_grammarParser.RefContext = RefContext;

lilu_grammarParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, lilu_grammarParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(lilu_grammarParser.ID);
        this.state = 85;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 79;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 80;
                this.expr(0);
                this.state = 81;
                this.match(lilu_grammarParser.RBRACK); 
            }
            this.state = 87;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ref = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RefContext);
    } else {
        return this.getTypedRuleContext(RefContext,i);
    }
};

VariableContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.DOT);
    } else {
        return this.getToken(lilu_grammarParser.DOT, i);
    }
};


VariableContext.prototype.THIS = function() {
    return this.getToken(lilu_grammarParser.THIS, 0);
};

VariableContext.prototype.SUPER = function() {
    return this.getToken(lilu_grammarParser.SUPER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable(this);
	}
};




lilu_grammarParser.VariableContext = VariableContext;

lilu_grammarParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, lilu_grammarParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS) {
            this.state = 88;
            _la = this._input.LA(1);
            if(!(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 89;
            this.match(lilu_grammarParser.DOT);
        }

        this.state = 92;
        this.ref();
        this.state = 97;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 93;
                this.match(lilu_grammarParser.DOT);
                this.state = 94;
                this.ref(); 
            }
            this.state = 99;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Variable_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable_val;
    return this;
}

Variable_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_valContext.prototype.constructor = Variable_valContext;

Variable_valContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

Variable_valContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Variable_valContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Variable_valContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable_val(this);
	}
};

Variable_valContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable_val(this);
	}
};




lilu_grammarParser.Variable_valContext = Variable_valContext;

lilu_grammarParser.prototype.variable_val = function() {

    var localctx = new Variable_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, lilu_grammarParser.RULE_variable_val);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.ref();
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.ASSIGN) {
            this.state = 101;
            this.match(lilu_grammarParser.ASSIGN);
            this.state = 102;
            this.expr(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Variable_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable_def;
    return this;
}

Variable_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_defContext.prototype.constructor = Variable_defContext;

Variable_defContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Variable_defContext.prototype.variable_val = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_valContext);
    } else {
        return this.getTypedRuleContext(Variable_valContext,i);
    }
};

Variable_defContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Variable_defContext.prototype.CONST = function() {
    return this.getToken(lilu_grammarParser.CONST, 0);
};

Variable_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


Variable_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable_def(this);
	}
};

Variable_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable_def(this);
	}
};




lilu_grammarParser.Variable_defContext = Variable_defContext;

lilu_grammarParser.prototype.variable_def = function() {

    var localctx = new Variable_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, lilu_grammarParser.RULE_variable_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.CONST) {
            this.state = 105;
            this.match(lilu_grammarParser.CONST);
        }

        this.state = 108;
        this.type();
        this.state = 109;
        this.variable_val();
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.COMMA) {
            this.state = 110;
            this.match(lilu_grammarParser.COMMA);
            this.state = 111;
            this.variable_val();
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 117;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;


 
ArgsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ArgsArgsContext(parser, ctx) {
	ArgsContext.call(this, parser);
    ArgsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgsArgsContext.prototype = Object.create(ArgsContext.prototype);
ArgsArgsContext.prototype.constructor = ArgsArgsContext;

lilu_grammarParser.ArgsArgsContext = ArgsArgsContext;

ArgsArgsContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

ArgsArgsContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

ArgsArgsContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ArgsArgsContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


ArgsArgsContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

ArgsArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgsArgs(this);
	}
};

ArgsArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgsArgs(this);
	}
};


function ArgsTypeContext(parser, ctx) {
	ArgsContext.call(this, parser);
    ArgsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgsTypeContext.prototype = Object.create(ArgsContext.prototype);
ArgsTypeContext.prototype.constructor = ArgsTypeContext;

lilu_grammarParser.ArgsTypeContext = ArgsTypeContext;

ArgsTypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ArgsTypeContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


ArgsTypeContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

ArgsTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgsType(this);
	}
};

ArgsTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgsType(this);
	}
};



lilu_grammarParser.prototype.args = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ArgsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, lilu_grammarParser.RULE_args, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new ArgsTypeContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 120;
        this.type();
        this.state = 125;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 121;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 122;
                this.match(lilu_grammarParser.RBRACK); 
            }
            this.state = 127;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 140;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ArgsArgsContext(this, new ArgsContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_args);
                this.state = 128;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 129;
                this.match(lilu_grammarParser.COMMA);
                this.state = 130;
                this.type();
                this.state = 135;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 131;
                        this.match(lilu_grammarParser.LBRACK);
                        this.state = 132;
                        this.match(lilu_grammarParser.RBRACK); 
                    }
                    this.state = 137;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
                }
         
            }
            this.state = 142;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Args_variableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_args_variable;
    return this;
}

Args_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Args_variableContext.prototype.constructor = Args_variableContext;


 
Args_variableContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Args_variableTypeContext(parser, ctx) {
	Args_variableContext.call(this, parser);
    Args_variableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Args_variableTypeContext.prototype = Object.create(Args_variableContext.prototype);
Args_variableTypeContext.prototype.constructor = Args_variableTypeContext;

lilu_grammarParser.Args_variableTypeContext = Args_variableTypeContext;

Args_variableTypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Args_variableTypeContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Args_variableTypeContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


Args_variableTypeContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

Args_variableTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgs_variableType(this);
	}
};

Args_variableTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgs_variableType(this);
	}
};


function Args_variableArgs_variableContext(parser, ctx) {
	Args_variableContext.call(this, parser);
    Args_variableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Args_variableArgs_variableContext.prototype = Object.create(Args_variableContext.prototype);
Args_variableArgs_variableContext.prototype.constructor = Args_variableArgs_variableContext;

lilu_grammarParser.Args_variableArgs_variableContext = Args_variableArgs_variableContext;

Args_variableArgs_variableContext.prototype.args_variable = function() {
    return this.getTypedRuleContext(Args_variableContext,0);
};

Args_variableArgs_variableContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

Args_variableArgs_variableContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Args_variableArgs_variableContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Args_variableArgs_variableContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


Args_variableArgs_variableContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

Args_variableArgs_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgs_variableArgs_variable(this);
	}
};

Args_variableArgs_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgs_variableArgs_variable(this);
	}
};



lilu_grammarParser.prototype.args_variable = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Args_variableContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, lilu_grammarParser.RULE_args_variable, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new Args_variableTypeContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 144;
        this.type();
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.LBRACK) {
            this.state = 145;
            this.match(lilu_grammarParser.LBRACK);
            this.state = 146;
            this.match(lilu_grammarParser.RBRACK);
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 152;
        this.match(lilu_grammarParser.ID);
        this._ctx.stop = this._input.LT(-1);
        this.state = 168;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Args_variableArgs_variableContext(this, new Args_variableContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_args_variable);
                this.state = 154;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 155;
                this.match(lilu_grammarParser.COMMA);
                this.state = 156;
                this.type();
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===lilu_grammarParser.LBRACK) {
                    this.state = 157;
                    this.match(lilu_grammarParser.LBRACK);
                    this.state = 158;
                    this.match(lilu_grammarParser.RBRACK);
                    this.state = 163;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 164;
                this.match(lilu_grammarParser.ID); 
            }
            this.state = 170;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Func_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_func_dcl;
    return this;
}

Func_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_dclContext.prototype.constructor = Func_dclContext;

Func_dclContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Func_dclContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LPAREN);
    } else {
        return this.getToken(lilu_grammarParser.LPAREN, i);
    }
};


Func_dclContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RPAREN);
    } else {
        return this.getToken(lilu_grammarParser.RPAREN, i);
    }
};


Func_dclContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Func_dclContext.prototype.args = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgsContext);
    } else {
        return this.getTypedRuleContext(ArgsContext,i);
    }
};

Func_dclContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Func_dclContext.prototype.args_variable = function() {
    return this.getTypedRuleContext(Args_variableContext,0);
};

Func_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_dcl(this);
	}
};

Func_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_dcl(this);
	}
};




lilu_grammarParser.Func_dclContext = Func_dclContext;

lilu_grammarParser.prototype.func_dcl = function() {

    var localctx = new Func_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, lilu_grammarParser.RULE_func_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.LPAREN) {
            this.state = 171;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 172;
            this.args(0);
            this.state = 173;
            this.match(lilu_grammarParser.RPAREN);
            this.state = 174;
            this.match(lilu_grammarParser.ASSIGN);
        }

        this.state = 178;
        this.match(lilu_grammarParser.ID);
        this.state = 179;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 180;
            this.args(0);

        } else if(la_===2) {
            this.state = 181;
            this.args_variable(0);

        }
        this.state = 184;
        this.match(lilu_grammarParser.RPAREN);
        this.state = 185;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type_dcl;
    return this;
}

Type_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_dclContext.prototype.constructor = Type_dclContext;

Type_dclContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Type_dclContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Type_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType_dcl(this);
	}
};

Type_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType_dcl(this);
	}
};




lilu_grammarParser.Type_dclContext = Type_dclContext;

lilu_grammarParser.prototype.type_dcl = function() {

    var localctx = new Type_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, lilu_grammarParser.RULE_type_dcl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(lilu_grammarParser.ID);
        this.state = 188;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ft_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ft_dcl;
    return this;
}

Ft_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ft_dclContext.prototype.constructor = Ft_dclContext;

Ft_dclContext.prototype.DECLARE = function() {
    return this.getToken(lilu_grammarParser.DECLARE, 0);
};

Ft_dclContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Ft_dclContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Ft_dclContext.prototype.func_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_dclContext);
    } else {
        return this.getTypedRuleContext(Func_dclContext,i);
    }
};

Ft_dclContext.prototype.type_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Type_dclContext);
    } else {
        return this.getTypedRuleContext(Type_dclContext,i);
    }
};

Ft_dclContext.prototype.variable_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_defContext);
    } else {
        return this.getTypedRuleContext(Variable_defContext,i);
    }
};

Ft_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_dcl(this);
	}
};

Ft_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_dcl(this);
	}
};




lilu_grammarParser.Ft_dclContext = Ft_dclContext;

lilu_grammarParser.prototype.ft_dcl = function() {

    var localctx = new Ft_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, lilu_grammarParser.RULE_ft_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(lilu_grammarParser.DECLARE);
        this.state = 191;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 195; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 195;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            switch(la_) {
            case 1:
                this.state = 192;
                this.func_dcl();
                break;

            case 2:
                this.state = 193;
                this.type_dcl();
                break;

            case 3:
                this.state = 194;
                this.variable_def();
                break;

            }
            this.state = 197; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.CONST) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID);
        this.state = 199;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_dcl;
    return this;
}

DclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DclContext.prototype.constructor = DclContext;

DclContext.prototype.ft_dcl = function() {
    return this.getTypedRuleContext(Ft_dclContext,0);
};

DclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterDcl(this);
	}
};

DclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitDcl(this);
	}
};




lilu_grammarParser.DclContext = DclContext;

lilu_grammarParser.prototype.dcl = function() {

    var localctx = new DclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, lilu_grammarParser.RULE_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.DECLARE) {
            this.state = 201;
            this.ft_dcl();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Else_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_else_stmt;
    return this;
}

Else_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_stmtContext.prototype.constructor = Else_stmtContext;

Else_stmtContext.prototype.ELSE = function() {
    return this.getToken(lilu_grammarParser.ELSE, 0);
};

Else_stmtContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Else_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterElse_stmt(this);
	}
};

Else_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitElse_stmt(this);
	}
};




lilu_grammarParser.Else_stmtContext = Else_stmtContext;

lilu_grammarParser.prototype.else_stmt = function() {

    var localctx = new Else_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, lilu_grammarParser.RULE_else_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(lilu_grammarParser.ELSE);
        this.state = 205;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Cond_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_cond_stmt;
    return this;
}

Cond_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cond_stmtContext.prototype.constructor = Cond_stmtContext;


 
Cond_stmtContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Cond_stmtIFContext(parser, ctx) {
	Cond_stmtContext.call(this, parser);
    Cond_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Cond_stmtIFContext.prototype = Object.create(Cond_stmtContext.prototype);
Cond_stmtIFContext.prototype.constructor = Cond_stmtIFContext;

lilu_grammarParser.Cond_stmtIFContext = Cond_stmtIFContext;

Cond_stmtIFContext.prototype.IF = function() {
    return this.getToken(lilu_grammarParser.IF, 0);
};

Cond_stmtIFContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Cond_stmtIFContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Cond_stmtIFContext.prototype.else_stmt = function() {
    return this.getTypedRuleContext(Else_stmtContext,0);
};
Cond_stmtIFContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterCond_stmtIF(this);
	}
};

Cond_stmtIFContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitCond_stmtIF(this);
	}
};


function Cond_stmtSWITCHContext(parser, ctx) {
	Cond_stmtContext.call(this, parser);
    Cond_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Cond_stmtSWITCHContext.prototype = Object.create(Cond_stmtContext.prototype);
Cond_stmtSWITCHContext.prototype.constructor = Cond_stmtSWITCHContext;

lilu_grammarParser.Cond_stmtSWITCHContext = Cond_stmtSWITCHContext;

Cond_stmtSWITCHContext.prototype.SWITCH = function() {
    return this.getToken(lilu_grammarParser.SWITCH, 0);
};

Cond_stmtSWITCHContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Cond_stmtSWITCHContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Cond_stmtSWITCHContext.prototype.DEFAULT = function() {
    return this.getToken(lilu_grammarParser.DEFAULT, 0);
};

Cond_stmtSWITCHContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COLON);
    } else {
        return this.getToken(lilu_grammarParser.COLON, i);
    }
};


Cond_stmtSWITCHContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Cond_stmtSWITCHContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Cond_stmtSWITCHContext.prototype.CASE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.CASE);
    } else {
        return this.getToken(lilu_grammarParser.CASE, i);
    }
};


Cond_stmtSWITCHContext.prototype.INT_CONST = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.INT_CONST);
    } else {
        return this.getToken(lilu_grammarParser.INT_CONST, i);
    }
};


Cond_stmtSWITCHContext.prototype.HEX_CONST = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.HEX_CONST);
    } else {
        return this.getToken(lilu_grammarParser.HEX_CONST, i);
    }
};

Cond_stmtSWITCHContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterCond_stmtSWITCH(this);
	}
};

Cond_stmtSWITCHContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitCond_stmtSWITCH(this);
	}
};



lilu_grammarParser.Cond_stmtContext = Cond_stmtContext;

lilu_grammarParser.prototype.cond_stmt = function() {

    var localctx = new Cond_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, lilu_grammarParser.RULE_cond_stmt);
    var _la = 0; // Token type
    try {
        this.state = 230;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.IF:
            localctx = new Cond_stmtIFContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 207;
            this.match(lilu_grammarParser.IF);
            this.state = 208;
            this.expr(0);
            this.state = 209;
            this.block();
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===lilu_grammarParser.ELSE) {
                this.state = 210;
                this.else_stmt();
            }

            break;
        case lilu_grammarParser.SWITCH:
            localctx = new Cond_stmtSWITCHContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.match(lilu_grammarParser.SWITCH);
            this.state = 214;
            this.variable();
            this.state = 215;
            this.match(lilu_grammarParser.LBRACE);
            this.state = 222;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.CASE) {
                this.state = 216;
                this.match(lilu_grammarParser.CASE);
                this.state = 217;
                _la = this._input.LA(1);
                if(!(_la===lilu_grammarParser.HEX_CONST || _la===lilu_grammarParser.INT_CONST)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 218;
                this.match(lilu_grammarParser.COLON);
                this.state = 219;
                this.block();
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 225;
            this.match(lilu_grammarParser.DEFAULT);
            this.state = 226;
            this.match(lilu_grammarParser.COLON);
            this.state = 227;
            this.block();
            this.state = 228;
            this.match(lilu_grammarParser.RBRACE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Loop_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_loop_stmt;
    return this;
}

Loop_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Loop_stmtContext.prototype.constructor = Loop_stmtContext;


 
Loop_stmtContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Loop_stmtWHILEContext(parser, ctx) {
	Loop_stmtContext.call(this, parser);
    Loop_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Loop_stmtWHILEContext.prototype = Object.create(Loop_stmtContext.prototype);
Loop_stmtWHILEContext.prototype.constructor = Loop_stmtWHILEContext;

lilu_grammarParser.Loop_stmtWHILEContext = Loop_stmtWHILEContext;

Loop_stmtWHILEContext.prototype.WHILE = function() {
    return this.getToken(lilu_grammarParser.WHILE, 0);
};

Loop_stmtWHILEContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Loop_stmtWHILEContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
Loop_stmtWHILEContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterLoop_stmtWHILE(this);
	}
};

Loop_stmtWHILEContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitLoop_stmtWHILE(this);
	}
};


function Loop_stmtFORContext(parser, ctx) {
	Loop_stmtContext.call(this, parser);
    Loop_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Loop_stmtFORContext.prototype = Object.create(Loop_stmtContext.prototype);
Loop_stmtFORContext.prototype.constructor = Loop_stmtFORContext;

lilu_grammarParser.Loop_stmtFORContext = Loop_stmtFORContext;

Loop_stmtFORContext.prototype.FOR = function() {
    return this.getToken(lilu_grammarParser.FOR, 0);
};

Loop_stmtFORContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.SEMI);
    } else {
        return this.getToken(lilu_grammarParser.SEMI, i);
    }
};


Loop_stmtFORContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Loop_stmtFORContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Loop_stmtFORContext.prototype.assign = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignContext);
    } else {
        return this.getTypedRuleContext(AssignContext,i);
    }
};

Loop_stmtFORContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
Loop_stmtFORContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterLoop_stmtFOR(this);
	}
};

Loop_stmtFORContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitLoop_stmtFOR(this);
	}
};



lilu_grammarParser.Loop_stmtContext = Loop_stmtContext;

lilu_grammarParser.prototype.loop_stmt = function() {

    var localctx = new Loop_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, lilu_grammarParser.RULE_loop_stmt);
    var _la = 0; // Token type
    try {
        this.state = 251;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.FOR:
            localctx = new Loop_stmtFORContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this.match(lilu_grammarParser.FOR);
            this.state = 237;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING) | (1 << lilu_grammarParser.SUPER) | (1 << lilu_grammarParser.THIS))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
                this.state = 234;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
                if(la_===1) {
                    this.state = 233;
                    this.type();

                }
                this.state = 236;
                this.assign();
            }

            this.state = 239;
            this.match(lilu_grammarParser.SEMI);
            this.state = 240;
            this.expr(0);
            this.state = 241;
            this.match(lilu_grammarParser.SEMI);
            this.state = 243;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
                this.state = 242;
                this.assign();
            }

            this.state = 245;
            this.block();
            break;
        case lilu_grammarParser.WHILE:
            localctx = new Loop_stmtWHILEContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 247;
            this.match(lilu_grammarParser.WHILE);
            this.state = 248;
            this.expr(0);
            this.state = 249;
            this.block();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LBRACK = function() {
    return this.getToken(lilu_grammarParser.LBRACK, 0);
};

ListContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ListContext.prototype.RBRACK = function() {
    return this.getToken(lilu_grammarParser.RBRACK, 0);
};

ListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitList(this);
	}
};




lilu_grammarParser.ListContext = ListContext;

lilu_grammarParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, lilu_grammarParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(lilu_grammarParser.LBRACK);
        this.state = 254;
        this.expr(0);
        this.state = 259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.COMMA) {
            this.state = 255;
            this.match(lilu_grammarParser.COMMA);
            this.state = 256;
            this.expr(0);
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 262;
        this.match(lilu_grammarParser.RBRACK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_params;
    return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;

ParamsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


ParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParams(this);
	}
};

ParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParams(this);
	}
};




lilu_grammarParser.ParamsContext = ParamsContext;

lilu_grammarParser.prototype.params = function() {

    var localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, lilu_grammarParser.RULE_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.expr(0);
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.COMMA) {
            this.state = 265;
            this.match(lilu_grammarParser.COMMA);
            this.state = 266;
            this.expr(0);
            this.state = 271;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Handle_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_handle_call;
    return this;
}

Handle_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Handle_callContext.prototype.constructor = Handle_callContext;

Handle_callContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Handle_callContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Handle_callContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

Handle_callContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

Handle_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterHandle_call(this);
	}
};

Handle_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitHandle_call(this);
	}
};




lilu_grammarParser.Handle_callContext = Handle_callContext;

lilu_grammarParser.prototype.handle_call = function() {

    var localctx = new Handle_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, lilu_grammarParser.RULE_handle_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(lilu_grammarParser.ID);
        this.state = 273;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 275;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (lilu_grammarParser.BANG - 4)) | (1 << (lilu_grammarParser.TILDE - 4)) | (1 << (lilu_grammarParser.ALLOCATE - 4)) | (1 << (lilu_grammarParser.NIL - 4)) | (1 << (lilu_grammarParser.READ - 4)) | (1 << (lilu_grammarParser.SUPER - 4)) | (1 << (lilu_grammarParser.THIS - 4)) | (1 << (lilu_grammarParser.WRITE - 4)) | (1 << (lilu_grammarParser.REAL_CONST - 4)))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (lilu_grammarParser.HEX_CONST - 36)) | (1 << (lilu_grammarParser.INT_CONST - 36)) | (1 << (lilu_grammarParser.BOOL_CONST - 36)) | (1 << (lilu_grammarParser.STRING_CONST - 36)) | (1 << (lilu_grammarParser.LPAREN - 36)) | (1 << (lilu_grammarParser.LBRACK - 36)) | (1 << (lilu_grammarParser.SUB - 36)) | (1 << (lilu_grammarParser.ID - 36)))) !== 0)) {
            this.state = 274;
            this.params();
        }

        this.state = 277;
        this.match(lilu_grammarParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_func_call;
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;


 
Func_callContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Func_callREADContext(parser, ctx) {
	Func_callContext.call(this, parser);
    Func_callContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Func_callREADContext.prototype = Object.create(Func_callContext.prototype);
Func_callREADContext.prototype.constructor = Func_callREADContext;

lilu_grammarParser.Func_callREADContext = Func_callREADContext;

Func_callREADContext.prototype.READ = function() {
    return this.getToken(lilu_grammarParser.READ, 0);
};

Func_callREADContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Func_callREADContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callREADContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};
Func_callREADContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_callREAD(this);
	}
};

Func_callREADContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_callREAD(this);
	}
};


function Func_callWRITEContext(parser, ctx) {
	Func_callContext.call(this, parser);
    Func_callContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Func_callWRITEContext.prototype = Object.create(Func_callContext.prototype);
Func_callWRITEContext.prototype.constructor = Func_callWRITEContext;

lilu_grammarParser.Func_callWRITEContext = Func_callWRITEContext;

Func_callWRITEContext.prototype.WRITE = function() {
    return this.getToken(lilu_grammarParser.WRITE, 0);
};

Func_callWRITEContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Func_callWRITEContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callWRITEContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};
Func_callWRITEContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_callWRITE(this);
	}
};

Func_callWRITEContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_callWRITE(this);
	}
};


function Func_callVariableContext(parser, ctx) {
	Func_callContext.call(this, parser);
    Func_callContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Func_callVariableContext.prototype = Object.create(Func_callContext.prototype);
Func_callVariableContext.prototype.constructor = Func_callVariableContext;

lilu_grammarParser.Func_callVariableContext = Func_callVariableContext;

Func_callVariableContext.prototype.handle_call = function() {
    return this.getTypedRuleContext(Handle_callContext,0);
};

Func_callVariableContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callVariableContext.prototype.DOT = function() {
    return this.getToken(lilu_grammarParser.DOT, 0);
};
Func_callVariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_callVariable(this);
	}
};

Func_callVariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_callVariable(this);
	}
};



lilu_grammarParser.Func_callContext = Func_callContext;

lilu_grammarParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, lilu_grammarParser.RULE_func_call);
    try {
        this.state = 295;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.ID:
            localctx = new Func_callVariableContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 282;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
            if(la_===1) {
                this.state = 279;
                this.variable();
                this.state = 280;
                this.match(lilu_grammarParser.DOT);

            }
            this.state = 284;
            this.handle_call();
            break;
        case lilu_grammarParser.READ:
            localctx = new Func_callREADContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 285;
            this.match(lilu_grammarParser.READ);
            this.state = 286;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 287;
            this.variable();
            this.state = 288;
            this.match(lilu_grammarParser.RPAREN);
            break;
        case lilu_grammarParser.WRITE:
            localctx = new Func_callWRITEContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 290;
            this.match(lilu_grammarParser.WRITE);
            this.state = 291;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 292;
            this.variable();
            this.state = 293;
            this.match(lilu_grammarParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;


 
StmtContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StmtBREAKContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtBREAKContext.prototype = Object.create(StmtContext.prototype);
StmtBREAKContext.prototype.constructor = StmtBREAKContext;

lilu_grammarParser.StmtBREAKContext = StmtBREAKContext;

StmtBREAKContext.prototype.BREAK = function() {
    return this.getToken(lilu_grammarParser.BREAK, 0);
};

StmtBREAKContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtBREAKContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtBREAK(this);
	}
};

StmtBREAKContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtBREAK(this);
	}
};


function StmtDESTRUCTContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtDESTRUCTContext.prototype = Object.create(StmtContext.prototype);
StmtDESTRUCTContext.prototype.constructor = StmtDESTRUCTContext;

lilu_grammarParser.StmtDESTRUCTContext = StmtDESTRUCTContext;

StmtDESTRUCTContext.prototype.DESTRUCT = function() {
    return this.getToken(lilu_grammarParser.DESTRUCT, 0);
};

StmtDESTRUCTContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

StmtDESTRUCTContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

StmtDESTRUCTContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


StmtDESTRUCTContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

StmtDESTRUCTContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtDESTRUCT(this);
	}
};

StmtDESTRUCTContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtDESTRUCT(this);
	}
};


function StmtLoop_stmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtLoop_stmtContext.prototype = Object.create(StmtContext.prototype);
StmtLoop_stmtContext.prototype.constructor = StmtLoop_stmtContext;

lilu_grammarParser.StmtLoop_stmtContext = StmtLoop_stmtContext;

StmtLoop_stmtContext.prototype.loop_stmt = function() {
    return this.getTypedRuleContext(Loop_stmtContext,0);
};
StmtLoop_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtLoop_stmt(this);
	}
};

StmtLoop_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtLoop_stmt(this);
	}
};


function StmtCONTINUEContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtCONTINUEContext.prototype = Object.create(StmtContext.prototype);
StmtCONTINUEContext.prototype.constructor = StmtCONTINUEContext;

lilu_grammarParser.StmtCONTINUEContext = StmtCONTINUEContext;

StmtCONTINUEContext.prototype.CONTINUE = function() {
    return this.getToken(lilu_grammarParser.CONTINUE, 0);
};

StmtCONTINUEContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtCONTINUEContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtCONTINUE(this);
	}
};

StmtCONTINUEContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtCONTINUE(this);
	}
};


function StmtFunc_callContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtFunc_callContext.prototype = Object.create(StmtContext.prototype);
StmtFunc_callContext.prototype.constructor = StmtFunc_callContext;

lilu_grammarParser.StmtFunc_callContext = StmtFunc_callContext;

StmtFunc_callContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

StmtFunc_callContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtFunc_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtFunc_call(this);
	}
};

StmtFunc_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtFunc_call(this);
	}
};


function StmtRETURNContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtRETURNContext.prototype = Object.create(StmtContext.prototype);
StmtRETURNContext.prototype.constructor = StmtRETURNContext;

lilu_grammarParser.StmtRETURNContext = StmtRETURNContext;

StmtRETURNContext.prototype.RETURN = function() {
    return this.getToken(lilu_grammarParser.RETURN, 0);
};

StmtRETURNContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtRETURNContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtRETURN(this);
	}
};

StmtRETURNContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtRETURN(this);
	}
};


function StmtCond_stmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtCond_stmtContext.prototype = Object.create(StmtContext.prototype);
StmtCond_stmtContext.prototype.constructor = StmtCond_stmtContext;

lilu_grammarParser.StmtCond_stmtContext = StmtCond_stmtContext;

StmtCond_stmtContext.prototype.cond_stmt = function() {
    return this.getTypedRuleContext(Cond_stmtContext,0);
};
StmtCond_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtCond_stmt(this);
	}
};

StmtCond_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtCond_stmt(this);
	}
};


function StmtAssignContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtAssignContext.prototype = Object.create(StmtContext.prototype);
StmtAssignContext.prototype.constructor = StmtAssignContext;

lilu_grammarParser.StmtAssignContext = StmtAssignContext;

StmtAssignContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtAssignContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtAssign(this);
	}
};

StmtAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtAssign(this);
	}
};



lilu_grammarParser.StmtContext = StmtContext;

lilu_grammarParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, lilu_grammarParser.RULE_stmt);
    var _la = 0; // Token type
    try {
        this.state = 321;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            localctx = new StmtAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 297;
            this.assign();
            this.state = 298;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 2:
            localctx = new StmtFunc_callContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 300;
            this.func_call();
            this.state = 301;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 3:
            localctx = new StmtCond_stmtContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 303;
            this.cond_stmt();
            break;

        case 4:
            localctx = new StmtLoop_stmtContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 304;
            this.loop_stmt();
            break;

        case 5:
            localctx = new StmtRETURNContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 305;
            this.match(lilu_grammarParser.RETURN);
            this.state = 306;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 6:
            localctx = new StmtBREAKContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 307;
            this.match(lilu_grammarParser.BREAK);
            this.state = 308;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 7:
            localctx = new StmtCONTINUEContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 309;
            this.match(lilu_grammarParser.CONTINUE);
            this.state = 310;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 8:
            localctx = new StmtDESTRUCTContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 311;
            this.match(lilu_grammarParser.DESTRUCT);
            this.state = 316;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.LBRACK) {
                this.state = 312;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 313;
                this.match(lilu_grammarParser.RBRACK);
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 319;
            this.match(lilu_grammarParser.ID);
            this.state = 320;
            this.match(lilu_grammarParser.SEMI);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

BlockContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

BlockContext.prototype.variable_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_defContext);
    } else {
        return this.getTypedRuleContext(Variable_defContext,i);
    }
};

BlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitBlock(this);
	}
};




lilu_grammarParser.BlockContext = BlockContext;

lilu_grammarParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, lilu_grammarParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 328;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (lilu_grammarParser.BOOL - 7)) | (1 << (lilu_grammarParser.BREAK - 7)) | (1 << (lilu_grammarParser.CONST - 7)) | (1 << (lilu_grammarParser.CONTINUE - 7)) | (1 << (lilu_grammarParser.DESTRUCT - 7)) | (1 << (lilu_grammarParser.FLOAT - 7)) | (1 << (lilu_grammarParser.FOR - 7)) | (1 << (lilu_grammarParser.IF - 7)) | (1 << (lilu_grammarParser.INT - 7)) | (1 << (lilu_grammarParser.READ - 7)) | (1 << (lilu_grammarParser.RETURN - 7)) | (1 << (lilu_grammarParser.STRING - 7)) | (1 << (lilu_grammarParser.SUPER - 7)) | (1 << (lilu_grammarParser.SWITCH - 7)) | (1 << (lilu_grammarParser.THIS - 7)) | (1 << (lilu_grammarParser.WHILE - 7)) | (1 << (lilu_grammarParser.WRITE - 7)))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
            this.state = 326;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
            switch(la_) {
            case 1:
                this.state = 324;
                this.variable_def();
                break;

            case 2:
                this.state = 325;
                this.stmt();
                break;

            }
            this.state = 330;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 331;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ExprExprCaretContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprCaretContext.prototype = Object.create(ExprContext.prototype);
ExprExprCaretContext.prototype.constructor = ExprExprCaretContext;

lilu_grammarParser.ExprExprCaretContext = ExprExprCaretContext;

ExprExprCaretContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprCaretContext.prototype.CARET = function() {
    return this.getToken(lilu_grammarParser.CARET, 0);
};
ExprExprCaretContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprCaret(this);
	}
};

ExprExprCaretContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprCaret(this);
	}
};


function ExprExprLtGtContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprLtGtContext.prototype = Object.create(ExprContext.prototype);
ExprExprLtGtContext.prototype.constructor = ExprExprLtGtContext;

lilu_grammarParser.ExprExprLtGtContext = ExprExprLtGtContext;

ExprExprLtGtContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprLtGtContext.prototype.LT = function() {
    return this.getToken(lilu_grammarParser.LT, 0);
};

ExprExprLtGtContext.prototype.GT = function() {
    return this.getToken(lilu_grammarParser.GT, 0);
};
ExprExprLtGtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprLtGt(this);
	}
};

ExprExprLtGtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprLtGt(this);
	}
};


function ExprExprBitandContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprBitandContext.prototype = Object.create(ExprContext.prototype);
ExprExprBitandContext.prototype.constructor = ExprExprBitandContext;

lilu_grammarParser.ExprExprBitandContext = ExprExprBitandContext;

ExprExprBitandContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprBitandContext.prototype.BITAND = function() {
    return this.getToken(lilu_grammarParser.BITAND, 0);
};
ExprExprBitandContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprBitand(this);
	}
};

ExprExprBitandContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprBitand(this);
	}
};


function ExprExprBitorContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprBitorContext.prototype = Object.create(ExprContext.prototype);
ExprExprBitorContext.prototype.constructor = ExprExprBitorContext;

lilu_grammarParser.ExprExprBitorContext = ExprExprBitorContext;

ExprExprBitorContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprBitorContext.prototype.BITOR = function() {
    return this.getToken(lilu_grammarParser.BITOR, 0);
};
ExprExprBitorContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprBitor(this);
	}
};

ExprExprBitorContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprBitor(this);
	}
};


function ExprExprOrContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprOrContext.prototype = Object.create(ExprContext.prototype);
ExprExprOrContext.prototype.constructor = ExprExprOrContext;

lilu_grammarParser.ExprExprOrContext = ExprExprOrContext;

ExprExprOrContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprOrContext.prototype.OR = function() {
    return this.getToken(lilu_grammarParser.OR, 0);
};
ExprExprOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprOr(this);
	}
};

ExprExprOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprOr(this);
	}
};


function ExprExprAddSubContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprAddSubContext.prototype = Object.create(ExprContext.prototype);
ExprExprAddSubContext.prototype.constructor = ExprExprAddSubContext;

lilu_grammarParser.ExprExprAddSubContext = ExprExprAddSubContext;

ExprExprAddSubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprAddSubContext.prototype.ADD = function() {
    return this.getToken(lilu_grammarParser.ADD, 0);
};

ExprExprAddSubContext.prototype.SUB = function() {
    return this.getToken(lilu_grammarParser.SUB, 0);
};
ExprExprAddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprAddSub(this);
	}
};

ExprExprAddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprAddSub(this);
	}
};


function ExprExprMulDivModContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprMulDivModContext.prototype = Object.create(ExprContext.prototype);
ExprExprMulDivModContext.prototype.constructor = ExprExprMulDivModContext;

lilu_grammarParser.ExprExprMulDivModContext = ExprExprMulDivModContext;

ExprExprMulDivModContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprMulDivModContext.prototype.MUL = function() {
    return this.getToken(lilu_grammarParser.MUL, 0);
};

ExprExprMulDivModContext.prototype.DIV = function() {
    return this.getToken(lilu_grammarParser.DIV, 0);
};

ExprExprMulDivModContext.prototype.MOD = function() {
    return this.getToken(lilu_grammarParser.MOD, 0);
};
ExprExprMulDivModContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprMulDivMod(this);
	}
};

ExprExprMulDivModContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprMulDivMod(this);
	}
};


function ExprUnary_opContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprUnary_opContext.prototype = Object.create(ExprContext.prototype);
ExprUnary_opContext.prototype.constructor = ExprUnary_opContext;

lilu_grammarParser.ExprUnary_opContext = ExprUnary_opContext;

ExprUnary_opContext.prototype.unary_op = function() {
    return this.getTypedRuleContext(Unary_opContext,0);
};

ExprUnary_opContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ExprUnary_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprUnary_op(this);
	}
};

ExprUnary_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprUnary_op(this);
	}
};


function ExprParanContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprParanContext.prototype = Object.create(ExprContext.prototype);
ExprParanContext.prototype.constructor = ExprParanContext;

lilu_grammarParser.ExprParanContext = ExprParanContext;

ExprParanContext.prototype.parans = function() {
    return this.getTypedRuleContext(ParansContext,0);
};
ExprParanContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprParan(this);
	}
};

ExprParanContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprParan(this);
	}
};


function ExprExprEqualNotequalLeGeContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprEqualNotequalLeGeContext.prototype = Object.create(ExprContext.prototype);
ExprExprEqualNotequalLeGeContext.prototype.constructor = ExprExprEqualNotequalLeGeContext;

lilu_grammarParser.ExprExprEqualNotequalLeGeContext = ExprExprEqualNotequalLeGeContext;

ExprExprEqualNotequalLeGeContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprEqualNotequalLeGeContext.prototype.EQUAL = function() {
    return this.getToken(lilu_grammarParser.EQUAL, 0);
};

ExprExprEqualNotequalLeGeContext.prototype.NOTEQUAL = function() {
    return this.getToken(lilu_grammarParser.NOTEQUAL, 0);
};

ExprExprEqualNotequalLeGeContext.prototype.LE = function() {
    return this.getToken(lilu_grammarParser.LE, 0);
};

ExprExprEqualNotequalLeGeContext.prototype.GE = function() {
    return this.getToken(lilu_grammarParser.GE, 0);
};
ExprExprEqualNotequalLeGeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprEqualNotequalLeGe(this);
	}
};

ExprExprEqualNotequalLeGeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprEqualNotequalLeGe(this);
	}
};


function ExprExprAndContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprAndContext.prototype = Object.create(ExprContext.prototype);
ExprExprAndContext.prototype.constructor = ExprExprAndContext;

lilu_grammarParser.ExprExprAndContext = ExprExprAndContext;

ExprExprAndContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprAndContext.prototype.AND = function() {
    return this.getToken(lilu_grammarParser.AND, 0);
};
ExprExprAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprAnd(this);
	}
};

ExprExprAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprAnd(this);
	}
};



lilu_grammarParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, lilu_grammarParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.BANG:
        case lilu_grammarParser.TILDE:
        case lilu_grammarParser.SUB:
            localctx = new ExprUnary_opContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 334;
            this.unary_op();
            this.state = 335;
            this.expr(11);
            break;
        case lilu_grammarParser.ALLOCATE:
        case lilu_grammarParser.NIL:
        case lilu_grammarParser.READ:
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.WRITE:
        case lilu_grammarParser.REAL_CONST:
        case lilu_grammarParser.HEX_CONST:
        case lilu_grammarParser.INT_CONST:
        case lilu_grammarParser.BOOL_CONST:
        case lilu_grammarParser.STRING_CONST:
        case lilu_grammarParser.LPAREN:
        case lilu_grammarParser.LBRACK:
        case lilu_grammarParser.ID:
            localctx = new ExprParanContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 337;
            this.parans();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 369;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 367;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprExprMulDivModContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 340;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 341;
                    _la = this._input.LA(1);
                    if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (lilu_grammarParser.MUL - 59)) | (1 << (lilu_grammarParser.DIV - 59)) | (1 << (lilu_grammarParser.MOD - 59)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 342;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new ExprExprAddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 343;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 344;
                    _la = this._input.LA(1);
                    if(!(_la===lilu_grammarParser.ADD || _la===lilu_grammarParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 345;
                    this.expr(10);
                    break;

                case 3:
                    localctx = new ExprExprLtGtContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 346;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 347;
                    _la = this._input.LA(1);
                    if(!(_la===lilu_grammarParser.GT || _la===lilu_grammarParser.LT)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 348;
                    this.expr(9);
                    break;

                case 4:
                    localctx = new ExprExprEqualNotequalLeGeContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 349;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 350;
                    _la = this._input.LA(1);
                    if(!(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (lilu_grammarParser.EQUAL - 51)) | (1 << (lilu_grammarParser.LE - 51)) | (1 << (lilu_grammarParser.GE - 51)) | (1 << (lilu_grammarParser.NOTEQUAL - 51)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 351;
                    this.expr(8);
                    break;

                case 5:
                    localctx = new ExprExprBitandContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 352;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 353;
                    this.match(lilu_grammarParser.BITAND);
                    this.state = 354;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new ExprExprCaretContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 355;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 356;
                    this.match(lilu_grammarParser.CARET);
                    this.state = 357;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new ExprExprBitorContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 358;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 359;
                    this.match(lilu_grammarParser.BITOR);
                    this.state = 360;
                    this.expr(5);
                    break;

                case 8:
                    localctx = new ExprExprAndContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 361;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 362;
                    this.match(lilu_grammarParser.AND);
                    this.state = 363;
                    this.expr(4);
                    break;

                case 9:
                    localctx = new ExprExprOrContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 364;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 365;
                    this.match(lilu_grammarParser.OR);
                    this.state = 366;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 371;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ParansContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_parans;
    return this;
}

ParansContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParansContext.prototype.constructor = ParansContext;


 
ParansContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ParanNilContext(parser, ctx) {
	ParansContext.call(this, parser);
    ParansContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParanNilContext.prototype = Object.create(ParansContext.prototype);
ParanNilContext.prototype.constructor = ParanNilContext;

lilu_grammarParser.ParanNilContext = ParanNilContext;

ParanNilContext.prototype.NIL = function() {
    return this.getToken(lilu_grammarParser.NIL, 0);
};
ParanNilContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParanNil(this);
	}
};

ParanNilContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParanNil(this);
	}
};


function ParanAllocateContext(parser, ctx) {
	ParansContext.call(this, parser);
    ParansContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParanAllocateContext.prototype = Object.create(ParansContext.prototype);
ParanAllocateContext.prototype.constructor = ParanAllocateContext;

lilu_grammarParser.ParanAllocateContext = ParanAllocateContext;

ParanAllocateContext.prototype.ALLOCATE = function() {
    return this.getToken(lilu_grammarParser.ALLOCATE, 0);
};

ParanAllocateContext.prototype.handle_call = function() {
    return this.getTypedRuleContext(Handle_callContext,0);
};
ParanAllocateContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParanAllocate(this);
	}
};

ParanAllocateContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParanAllocate(this);
	}
};


function ParanVarContext(parser, ctx) {
	ParansContext.call(this, parser);
    ParansContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParanVarContext.prototype = Object.create(ParansContext.prototype);
ParanVarContext.prototype.constructor = ParanVarContext;

lilu_grammarParser.ParanVarContext = ParanVarContext;

ParanVarContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
ParanVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParanVar(this);
	}
};

ParanVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParanVar(this);
	}
};


function ParanParanContext(parser, ctx) {
	ParansContext.call(this, parser);
    ParansContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParanParanContext.prototype = Object.create(ParansContext.prototype);
ParanParanContext.prototype.constructor = ParanParanContext;

lilu_grammarParser.ParanParanContext = ParanParanContext;

ParanParanContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

ParanParanContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParanParanContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};
ParanParanContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParanParan(this);
	}
};

ParanParanContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParanParan(this);
	}
};


function ParanFuncContext(parser, ctx) {
	ParansContext.call(this, parser);
    ParansContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParanFuncContext.prototype = Object.create(ParansContext.prototype);
ParanFuncContext.prototype.constructor = ParanFuncContext;

lilu_grammarParser.ParanFuncContext = ParanFuncContext;

ParanFuncContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};
ParanFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParanFunc(this);
	}
};

ParanFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParanFunc(this);
	}
};


function ParanListContext(parser, ctx) {
	ParansContext.call(this, parser);
    ParansContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParanListContext.prototype = Object.create(ParansContext.prototype);
ParanListContext.prototype.constructor = ParanListContext;

lilu_grammarParser.ParanListContext = ParanListContext;

ParanListContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};
ParanListContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParanList(this);
	}
};

ParanListContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParanList(this);
	}
};


function ParanConstContext(parser, ctx) {
	ParansContext.call(this, parser);
    ParansContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParanConstContext.prototype = Object.create(ParansContext.prototype);
ParanConstContext.prototype.constructor = ParanConstContext;

lilu_grammarParser.ParanConstContext = ParanConstContext;

ParanConstContext.prototype.const_val = function() {
    return this.getTypedRuleContext(Const_valContext,0);
};
ParanConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParanConst(this);
	}
};

ParanConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParanConst(this);
	}
};



lilu_grammarParser.ParansContext = ParansContext;

lilu_grammarParser.prototype.parans = function() {

    var localctx = new ParansContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, lilu_grammarParser.RULE_parans);
    try {
        this.state = 383;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParanParanContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 372;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 373;
            this.expr(0);
            this.state = 374;
            this.match(lilu_grammarParser.RPAREN);
            break;

        case 2:
            localctx = new ParanConstContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 376;
            this.const_val();
            break;

        case 3:
            localctx = new ParanAllocateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 377;
            this.match(lilu_grammarParser.ALLOCATE);
            this.state = 378;
            this.handle_call();
            break;

        case 4:
            localctx = new ParanFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 379;
            this.func_call();
            break;

        case 5:
            localctx = new ParanVarContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 380;
            this.variable();
            break;

        case 6:
            localctx = new ParanListContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 381;
            this.list();
            break;

        case 7:
            localctx = new ParanNilContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 382;
            this.match(lilu_grammarParser.NIL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Fun_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_fun_def;
    return this;
}

Fun_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fun_defContext.prototype.constructor = Fun_defContext;

Fun_defContext.prototype.FUNCTION = function() {
    return this.getToken(lilu_grammarParser.FUNCTION, 0);
};

Fun_defContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Fun_defContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LPAREN);
    } else {
        return this.getToken(lilu_grammarParser.LPAREN, i);
    }
};


Fun_defContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RPAREN);
    } else {
        return this.getToken(lilu_grammarParser.RPAREN, i);
    }
};


Fun_defContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Fun_defContext.prototype.args_variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Args_variableContext);
    } else {
        return this.getTypedRuleContext(Args_variableContext,i);
    }
};

Fun_defContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Fun_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFun_def(this);
	}
};

Fun_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFun_def(this);
	}
};




lilu_grammarParser.Fun_defContext = Fun_defContext;

lilu_grammarParser.prototype.fun_def = function() {

    var localctx = new Fun_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, lilu_grammarParser.RULE_fun_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.LPAREN) {
            this.state = 385;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 386;
            this.args_variable(0);
            this.state = 387;
            this.match(lilu_grammarParser.RPAREN);
            this.state = 388;
            this.match(lilu_grammarParser.ASSIGN);
        }

        this.state = 392;
        this.match(lilu_grammarParser.FUNCTION);
        this.state = 393;
        this.match(lilu_grammarParser.ID);
        this.state = 394;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 396;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.ID) {
            this.state = 395;
            this.args_variable(0);
        }

        this.state = 398;
        this.match(lilu_grammarParser.RPAREN);
        this.state = 399;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Access_modifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_access_modifier;
    return this;
}

Access_modifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_modifierContext.prototype.constructor = Access_modifierContext;

Access_modifierContext.prototype.PRIVATE = function() {
    return this.getToken(lilu_grammarParser.PRIVATE, 0);
};

Access_modifierContext.prototype.PUBLIC = function() {
    return this.getToken(lilu_grammarParser.PUBLIC, 0);
};

Access_modifierContext.prototype.PROTECTED = function() {
    return this.getToken(lilu_grammarParser.PROTECTED, 0);
};

Access_modifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterAccess_modifier(this);
	}
};

Access_modifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitAccess_modifier(this);
	}
};




lilu_grammarParser.Access_modifierContext = Access_modifierContext;

lilu_grammarParser.prototype.access_modifier = function() {

    var localctx = new Access_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, lilu_grammarParser.RULE_access_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.variable_def = function() {
    return this.getTypedRuleContext(Variable_defContext,0);
};

ComponentContext.prototype.fun_def = function() {
    return this.getTypedRuleContext(Fun_defContext,0);
};

ComponentContext.prototype.access_modifier = function() {
    return this.getTypedRuleContext(Access_modifierContext,0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitComponent(this);
	}
};




lilu_grammarParser.ComponentContext = ComponentContext;

lilu_grammarParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, lilu_grammarParser.RULE_component);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC))) !== 0)) {
            this.state = 403;
            this.access_modifier();
        }

        this.state = 408;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.BOOL:
        case lilu_grammarParser.CONST:
        case lilu_grammarParser.FLOAT:
        case lilu_grammarParser.INT:
        case lilu_grammarParser.STRING:
        case lilu_grammarParser.ID:
            this.state = 406;
            this.variable_def();
            break;
        case lilu_grammarParser.FUNCTION:
        case lilu_grammarParser.LPAREN:
            this.state = 407;
            this.fun_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type_def;
    return this;
}

Type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_defContext.prototype.constructor = Type_defContext;

Type_defContext.prototype.TYPE = function() {
    return this.getToken(lilu_grammarParser.TYPE, 0);
};

Type_defContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.ID);
    } else {
        return this.getToken(lilu_grammarParser.ID, i);
    }
};


Type_defContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Type_defContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Type_defContext.prototype.COLON = function() {
    return this.getToken(lilu_grammarParser.COLON, 0);
};

Type_defContext.prototype.component = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComponentContext);
    } else {
        return this.getTypedRuleContext(ComponentContext,i);
    }
};

Type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType_def(this);
	}
};

Type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType_def(this);
	}
};




lilu_grammarParser.Type_defContext = Type_defContext;

lilu_grammarParser.prototype.type_def = function() {

    var localctx = new Type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, lilu_grammarParser.RULE_type_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        this.match(lilu_grammarParser.TYPE);
        this.state = 411;
        this.match(lilu_grammarParser.ID);
        this.state = 414;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.COLON) {
            this.state = 412;
            this.match(lilu_grammarParser.COLON);
            this.state = 413;
            this.match(lilu_grammarParser.ID);
        }

        this.state = 416;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 418; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 417;
            this.component();
            this.state = 420; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.CONST) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC) | (1 << lilu_grammarParser.STRING))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (lilu_grammarParser.FUNCTION - 34)) | (1 << (lilu_grammarParser.LPAREN - 34)) | (1 << (lilu_grammarParser.ID - 34)))) !== 0));
        this.state = 422;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ft_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ft_def;
    return this;
}

Ft_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ft_defContext.prototype.constructor = Ft_defContext;


 
Ft_defContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Ft_defFunContext(parser, ctx) {
	Ft_defContext.call(this, parser);
    Ft_defContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Ft_defFunContext.prototype = Object.create(Ft_defContext.prototype);
Ft_defFunContext.prototype.constructor = Ft_defFunContext;

lilu_grammarParser.Ft_defFunContext = Ft_defFunContext;

Ft_defFunContext.prototype.fun_def = function() {
    return this.getTypedRuleContext(Fun_defContext,0);
};
Ft_defFunContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_defFun(this);
	}
};

Ft_defFunContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_defFun(this);
	}
};


function Ft_defTypeContext(parser, ctx) {
	Ft_defContext.call(this, parser);
    Ft_defContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Ft_defTypeContext.prototype = Object.create(Ft_defContext.prototype);
Ft_defTypeContext.prototype.constructor = Ft_defTypeContext;

lilu_grammarParser.Ft_defTypeContext = Ft_defTypeContext;

Ft_defTypeContext.prototype.type_def = function() {
    return this.getTypedRuleContext(Type_defContext,0);
};
Ft_defTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_defType(this);
	}
};

Ft_defTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_defType(this);
	}
};



lilu_grammarParser.Ft_defContext = Ft_defContext;

lilu_grammarParser.prototype.ft_def = function() {

    var localctx = new Ft_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, lilu_grammarParser.RULE_ft_def);
    try {
        this.state = 426;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.TYPE:
            localctx = new Ft_defTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 424;
            this.type_def();
            break;
        case lilu_grammarParser.FUNCTION:
        case lilu_grammarParser.LPAREN:
            localctx = new Ft_defFunContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 425;
            this.fun_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_def;
    return this;
}

DefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefContext.prototype.constructor = DefContext;

DefContext.prototype.ft_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ft_defContext);
    } else {
        return this.getTypedRuleContext(Ft_defContext,i);
    }
};

DefContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterDef(this);
	}
};

DefContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitDef(this);
	}
};




lilu_grammarParser.DefContext = DefContext;

lilu_grammarParser.prototype.def = function() {

    var localctx = new DefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, lilu_grammarParser.RULE_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 428;
            this.ft_def();
            this.state = 431; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (lilu_grammarParser.TYPE - 31)) | (1 << (lilu_grammarParser.FUNCTION - 31)) | (1 << (lilu_grammarParser.LPAREN - 31)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.leftAssign = function() {
    return this.getTypedRuleContext(LeftAssignContext,0);
};

AssignContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitAssign(this);
	}
};




lilu_grammarParser.AssignContext = AssignContext;

lilu_grammarParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, lilu_grammarParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        this.leftAssign();
        this.state = 434;
        this.match(lilu_grammarParser.ASSIGN);
        this.state = 435;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LeftAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_leftAssign;
    return this;
}

LeftAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LeftAssignContext.prototype.constructor = LeftAssignContext;


 
LeftAssignContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MultiAssignContext(parser, ctx) {
	LeftAssignContext.call(this, parser);
    LeftAssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiAssignContext.prototype = Object.create(LeftAssignContext.prototype);
MultiAssignContext.prototype.constructor = MultiAssignContext;

lilu_grammarParser.MultiAssignContext = MultiAssignContext;

MultiAssignContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

MultiAssignContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

MultiAssignContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

MultiAssignContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};

MultiAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterMultiAssign(this);
	}
};

MultiAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitMultiAssign(this);
	}
};


function SingleAssignContext(parser, ctx) {
	LeftAssignContext.call(this, parser);
    LeftAssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleAssignContext.prototype = Object.create(LeftAssignContext.prototype);
SingleAssignContext.prototype.constructor = SingleAssignContext;

lilu_grammarParser.SingleAssignContext = SingleAssignContext;

SingleAssignContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
SingleAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterSingleAssign(this);
	}
};

SingleAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitSingleAssign(this);
	}
};



lilu_grammarParser.LeftAssignContext = LeftAssignContext;

lilu_grammarParser.prototype.leftAssign = function() {

    var localctx = new LeftAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, lilu_grammarParser.RULE_leftAssign);
    var _la = 0; // Token type
    try {
        this.state = 448;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.ID:
            localctx = new SingleAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 437;
            this.variable();
            break;
        case lilu_grammarParser.LPAREN:
            localctx = new MultiAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 438;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 439;
            this.variable();
            this.state = 442; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 440;
                this.match(lilu_grammarParser.COMMA);
                this.state = 441;
                this.variable();
                this.state = 444; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===lilu_grammarParser.COMMA);
            this.state = 446;
            this.match(lilu_grammarParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Unary_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_unary_op;
    return this;
}

Unary_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_opContext.prototype.constructor = Unary_opContext;

Unary_opContext.prototype.SUB = function() {
    return this.getToken(lilu_grammarParser.SUB, 0);
};

Unary_opContext.prototype.BANG = function() {
    return this.getToken(lilu_grammarParser.BANG, 0);
};

Unary_opContext.prototype.TILDE = function() {
    return this.getToken(lilu_grammarParser.TILDE, 0);
};

Unary_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterUnary_op(this);
	}
};

Unary_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitUnary_op(this);
	}
};




lilu_grammarParser.Unary_opContext = Unary_opContext;

lilu_grammarParser.prototype.unary_op = function() {

    var localctx = new Unary_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, lilu_grammarParser.RULE_unary_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 450;
        _la = this._input.LA(1);
        if(!(_la===lilu_grammarParser.BANG || _la===lilu_grammarParser.TILDE || _la===lilu_grammarParser.SUB)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


lilu_grammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.args_sempred(localctx, predIndex);
	case 8:
			return this.args_variable_sempred(localctx, predIndex);
	case 22:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

lilu_grammarParser.prototype.args_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

lilu_grammarParser.prototype.args_variable_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

lilu_grammarParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.lilu_grammarParser = lilu_grammarParser;
